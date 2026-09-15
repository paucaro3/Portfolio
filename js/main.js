document.getElementById("year").textContent = new Date().getFullYear();

// FALLBACK_IMG and handleImgError are defined in index.html's <head> — see the
// comment there for why.

function cardTemplate(project) {
  const category = (project.subjects && project.subjects[0]) || project.category;
  return `
    <article class="card" data-id="${project.id}" tabindex="0">
      <div class="card-image">
        <img src="${project.thumb}" alt="${project.title}" onerror="handleImgError(this)">
      </div>
      <div class="card-body">
        <p class="card-category">${category.toUpperCase()}</p>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-tag">${project.tagline}</p>
        ${project.tags && project.tags.length ? `
          <div class="card-tags">
            ${project.tags.slice(0, 3).map(t => `<span>${t}</span>`).join("")}
          </div>` : ""}
        <span class="card-arrow">→</span>
      </div>
    </article>
  `;
}

// Renders an <img> for photo paths, a looping muted autoplay <video> for
// .mp4 paths, or an embedded YouTube player for a "youtube:<id>" marker —
// lets a gallery mix stills, short concept clips, and full external videos.
function galleryMediaTemplate(src, alt) {
  if (/^youtube:/.test(src)) {
    const id = src.slice("youtube:".length);
    return `<iframe class="youtube-embed" src="https://www.youtube.com/embed/${id}" title="${alt}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
  if (/\.mp4$/i.test(src)) {
    return `<video src="${src}" autoplay loop muted playsinline controls></video>`;
  }
  return `<img src="${src}" alt="${alt}" onerror="handleImgError(this)">`;
}

// Turns a filename like "thesis-process-lithography-flow.jpg" into a short
// caption ("Lithography Flow") for the process gallery — keeps captions
// meaningful without hand-writing one for every photo.
function captionFromSrc(src) {
  const filename = src.split("/").pop().replace(/\.[^.]+$/, "");
  const afterMarker = filename.includes("-process-") ? filename.split("-process-")[1] : filename;
  return afterMarker.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function processMediaTemplate(src, alt) {
  return `<figure>${galleryMediaTemplate(src, alt)}<figcaption>${captionFromSrc(src)}</figcaption></figure>`;
}

// Interleaved process layout: each step is an image (or a small paired set of
// images) beside its own short line — a steady left/right rhythm (image
// always on the left) instead of a zigzag, and instead of a photo grid with
// a separate wall of text.
function processStepTemplate(step, index, alt) {
  const media = step.images && step.images.length
    ? `<div class="process-row-pair">${step.images.map(src => galleryMediaTemplate(src, alt)).join("")}</div>`
    : galleryMediaTemplate(step.image, alt);
  return `
    <div class="process-row">
      <span class="process-row-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="process-row-media">${media}</div>
      <div class="process-row-text">
        ${step.caption ? `<p class="process-row-caption">${step.caption}</p>` : ""}
        <p>${step.text}</p>
      </div>
    </div>
  `;
}

function renderGrid(containerId, category) {
  const container = document.getElementById(containerId);
  const items = PROJECTS.filter(p => p.category === category);
  container.innerHTML = items.map(cardTemplate).join("");
}

// ---------------- Featured Projects (filterable) ----------------
const FILTERS = [
  { id: "all", label: "ALL" },
  { id: "sensors", label: "SENSORS" },
  { id: "devices", label: "DEVICES" },
  { id: "mechanics", label: "MECHANICS" },
  { id: "fabrication", label: "FABRICATION" },
  { id: "research", label: "RESEARCH" }
];

const featuredProjects = PROJECTS.filter(p => p.category === "research" || p.category === "engineering");
let activeFilter = "all";
let openProjectId = null;

function syncOpenCardBorder() {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("is-open", card.dataset.id === openProjectId);
  });
}

function renderFilterBar() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = FILTERS.map(f =>
    `<button class="filter-btn${f.id === activeFilter ? " active" : ""}" data-filter="${f.id}" role="tab" aria-selected="${f.id === activeFilter}">${f.label}</button>`
  ).join("");
}

function renderFeaturedGrid() {
  const container = document.getElementById("featured-grid");
  const items = activeFilter === "all"
    ? featuredProjects
    : featuredProjects.filter(p => p.subjects && p.subjects.includes(activeFilter));
  container.innerHTML = items.map(cardTemplate).join("");
  syncOpenCardBorder();
}

document.getElementById("filter-bar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  renderFilterBar();
  renderFeaturedGrid();
});

renderFilterBar();
renderFeaturedGrid();
renderGrid("experience-grid", "experience");
renderGrid("leadership-grid", "leadership");

// ---------------- Modal ----------------
const overlay = document.getElementById("modal-overlay");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalContext = document.getElementById("modal-context");
const modalDescription = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const modalLinks = document.getElementById("modal-links");
const modalPagination = document.getElementById("modal-pagination");
const modalHeroImage = document.getElementById("modal-hero-image");
const modalHeroSupport = document.getElementById("modal-hero-support");
const modalHeroCaption = document.getElementById("modal-hero-caption");
const modalProcessSection = document.getElementById("modal-process-section");
const modalProcessContent = document.getElementById("modal-process-content");

function setSidebarBlock(blockId, fieldId, value, isList) {
  const block = document.getElementById(blockId);
  const field = document.getElementById(fieldId);
  if (!value || (isList && !value.length)) {
    block.hidden = true;
    return;
  }
  block.hidden = false;
  if (isList) {
    field.innerHTML = value.map(v => `<li>${v}</li>`).join("");
  } else {
    field.textContent = value;
  }
}

// ---------------- Timeline (sidebar, per project) ----------------
const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_INDEX = { january:0, february:1, march:2, april:3, may:4, june:5, july:6, august:7, september:8, october:9, november:10, december:11 };

// Parses "August 2024 – May 2025" (month optional, single-year strings also
// work) into {startYear, endYear, startMonth, endMonth} — startMonth/endMonth
// are 0-11 or null when no month was given, used both for the fractional
// timeline position and for the "Aug 2024" style labels.
function parseDateRange(str) {
  if (!str) return null;
  const parts = str.split(/[–-]/).map(s => s.trim());
  const parseOne = part => {
    if (!part) return null;
    const yearMatch = part.match(/\d{4}/);
    if (!yearMatch) return null;
    const monthMatch = part.match(/[A-Za-z]+/);
    const monthIdx = monthMatch ? MONTH_INDEX[monthMatch[0].toLowerCase()] : undefined;
    return { year: parseInt(yearMatch[0], 10), month: monthIdx === undefined ? null : monthIdx };
  };
  const start = parseOne(parts[0]);
  if (!start) return null;
  const end = parseOne(parts[1]) || start;
  return { startYear: start.year, endYear: end.year, startMonth: start.month, endMonth: end.month };
}

function monthYearLabel(year, month) {
  return month === null ? String(year) : `${MONTH_ABBR[month]} ${year}`;
}

// School, shown on every project's timeline as fixed reference points — not
// tied to any project id, so they never highlight as "current".
const EDUCATION_MILESTONES = [
  { title: "B.S. Mechanical Engineering, SDSU", dates: "August 2021 – May 2025" },
  { title: "M.S. Bioengineering, SDSU", dates: "August 2025 – July 2026" }
].map(e => ({ ...e, range: parseDateRange(e.dates) }));

const TIMELINE_ENTRIES = PROJECTS
  .map(p => ({ id: p.id, title: p.title, dates: p.dates, range: parseDateRange(p.dates) }))
  .filter(e => e.range);

// Fractional year (e.g. Aug 2024 -> 2024.58) so positions reflect the actual
// month, not just the year.
function fractionalYear(year, month) {
  return year + (month === null ? 0 : month / 12);
}
// One merged, chronologically-sorted list — a vertical timeline reads
// top-to-bottom in time order, unlike the old horizontal strip which grouped
// education separately.
const TIMELINE_ALL = [
  ...EDUCATION_MILESTONES.map(e => ({ ...e, isEducation: true })),
  ...TIMELINE_ENTRIES.map(e => ({ ...e, isEducation: false }))
].sort((a, b) => fractionalYear(a.range.startYear, a.range.startMonth) - fractionalYear(b.range.startYear, b.range.startMonth));

function timelineTemplate(currentId) {
  const rows = TIMELINE_ALL.map(e => {
    const isCurrent = !e.isEducation && e.id === currentId;
    const rangeLabel = e.dates || monthYearLabel(e.range.startYear, e.range.startMonth);
    const classes = ["tl-row", isCurrent ? "is-current" : "", e.isEducation ? "is-education" : ""]
      .filter(Boolean).join(" ");
    return `
      <div class="${classes}">
        <div class="tl-marker"><span class="tl-dot"></span></div>
        <div class="tl-row-content">
          <span class="tl-row-date">${rangeLabel}</span>
          <span class="tl-row-title">${e.title}</span>
        </div>
      </div>`;
  }).join("");
  return `<div class="timeline-track">${rows}</div>`;
}

// ---------------- Lightbox gallery (per project, images only) ----------------
function isPlainImage(src) {
  return !/^youtube:/.test(src) && !/\.mp4$/i.test(src);
}

function buildGallery(project) {
  const gallery = [];
  const finalImages = (project.finalImages && project.finalImages.length)
    ? project.finalImages
    : ((project.images && project.images.length) ? project.images : [project.thumb]);
  finalImages.forEach((src, i) => {
    if (!isPlainImage(src)) return;
    gallery.push({ src, caption: (i === 0 && project.heroCaption) ? project.heroCaption : captionFromSrc(src) });
  });
  if (project.process && project.process.length) {
    project.process.forEach(step => {
      const imgs = (step.images && step.images.length) ? step.images : (step.image ? [step.image] : []);
      imgs.forEach(src => {
        if (!isPlainImage(src)) return;
        gallery.push({ src, caption: step.caption || step.text || captionFromSrc(src) });
      });
    });
  } else if (project.processImages && project.processImages.length) {
    project.processImages.forEach(src => {
      if (!isPlainImage(src)) return;
      gallery.push({ src, caption: captionFromSrc(src) });
    });
  }
  return gallery;
}

let currentGallery = [];

function openModal(project) {
  openProjectId = project.id;
  syncOpenCardBorder();

  const category = (project.subjects && project.subjects.length)
    ? project.subjects.slice(0, 2).map(s => s.toUpperCase()).join(" / ")
    : project.category.toUpperCase();
  modalTag.textContent = category;
  modalTitle.textContent = project.title;
  modalContext.textContent = project.tagline || "";
  modalDescription.innerHTML = project.description || "";

  modalTags.innerHTML = (project.tags && project.tags.length)
    ? project.tags.map(t => `<span>${t}</span>`).join("")
    : "";

  // finalImages = photos of the finished result. First one is the hero, the
  // next up to 3 are small supporting thumbnails — not an equal-weight
  // gallery grid. Falls back to the older flat `images` array if needed.
  const finalImages = (project.finalImages && project.finalImages.length)
    ? project.finalImages
    : ((project.images && project.images.length) ? project.images : [project.thumb]);
  modalHeroImage.innerHTML = galleryMediaTemplate(finalImages[0], project.title);
  const supportImages = finalImages.slice(1, 4);
  modalHeroSupport.innerHTML = supportImages
    .map(src => `<div class="support-thumb">${galleryMediaTemplate(src, project.title)}</div>`)
    .join("");
  modalHeroCaption.textContent = project.heroCaption || "";

  if (project.process && project.process.length) {
    // Preferred: each process image paired with its own short paragraph.
    // A project migrated from the legacy format can still carry a longer
    // narrative in processDescription — keep it, appended below the rows,
    // rather than silently dropping real written content.
    const rows = project.process
      .map((step, i) => processStepTemplate(step, i, `${project.title} — process`))
      .join("");
    const narrative = project.processDescription
      ? `<div class="modal-description modal-process-narrative">${project.processDescription}</div>`
      : "";
    modalProcessContent.innerHTML = rows + narrative;
    modalProcessSection.hidden = false;
  } else if (project.processImages && project.processImages.length) {
    // Legacy fallback for projects not yet migrated to `process`.
    const gallery = project.processImages
      .map(src => processMediaTemplate(src, `${project.title} — process`))
      .join("");
    modalProcessContent.innerHTML = `
      <div class="modal-process-gallery">${gallery}</div>
      <div class="modal-description">${project.processDescription || ""}</div>
    `;
    modalProcessSection.hidden = false;
  } else {
    modalProcessContent.innerHTML = "";
    modalProcessSection.hidden = true;
  }

  // Report/video action buttons — falls back to the older generic `links`
  // array for projects that haven't been given reportUrl/videoUrl yet.
  const actionLinks = [];
  if (project.reportUrl) {
    actionLinks.push(`<a class="btn-report" href="${project.reportUrl}" target="_blank" rel="noopener">VIEW FULL REPORT →</a>`);
  }
  if (project.videoUrl) {
    actionLinks.push(`<a class="link-video" href="${project.videoUrl}" target="_blank" rel="noopener">WATCH VIDEO ▶</a>`);
  }
  if (!actionLinks.length && project.links && project.links.length) {
    project.links.forEach(l => actionLinks.push(`<a class="link-video" href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`));
  }
  modalLinks.innerHTML = actionLinks.join("");
  modalLinks.style.display = actionLinks.length ? "flex" : "none";

  setSidebarBlock("sidebar-problem", "modal-problem", project.problem, false);
  setSidebarBlock("sidebar-role", "modal-role", project.role, false);
  setSidebarBlock("sidebar-results", "modal-results", project.keyResults, true);

  const toolsBlock = document.getElementById("sidebar-tools");
  const toolsField = document.getElementById("modal-tools");
  if (project.toolsUsed && project.toolsUsed.length) {
    toolsBlock.hidden = false;
    toolsField.innerHTML = project.toolsUsed.map(name => {
      const mark = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
      return `<div class="tool-mini" title="${name}">${mark}</div>`;
    }).join("");
  } else {
    toolsBlock.hidden = true;
  }

  const timelineBlock = document.getElementById("sidebar-timeline");
  const timelineField = document.getElementById("modal-timeline");
  const timelineDatesField = document.getElementById("modal-timeline-dates");
  if (TIMELINE_ENTRIES.some(e => e.id === project.id)) {
    timelineBlock.hidden = false;
    timelineDatesField.textContent = project.dates || "";
    timelineField.innerHTML = timelineTemplate(project.id);
  } else {
    timelineBlock.hidden = true;
  }

  const teamBlock = document.getElementById("sidebar-team");
  const teamImg = document.getElementById("modal-team-photo");
  if (project.teamPhoto) {
    teamBlock.hidden = false;
    teamImg.src = project.teamPhoto;
    teamImg.alt = `${project.title} team`;
    teamImg.onerror = () => handleImgError(teamImg);
  } else {
    teamBlock.hidden = true;
  }

  // Gallery indices for the lightbox — assigned in document order, which
  // matches buildGallery's own traversal order (hero, supports, process).
  currentGallery = buildGallery(project);
  const galleryImgs = overlay.querySelectorAll(
    "#modal-hero-image img, #modal-hero-support img, #modal-process-content img"
  );
  galleryImgs.forEach((img, i) => { img.dataset.gidx = i; });

  const idx = featuredProjects.findIndex(p => p.id === project.id);
  modalPagination.textContent = idx > -1
    ? `${String(idx + 1).padStart(2, "0")} / ${String(featuredProjects.length).padStart(2, "0")}`
    : "";
  const projectNav = document.getElementById("modal-project-nav");
  const prevBtn = document.getElementById("modal-prev-project");
  const nextBtn = document.getElementById("modal-next-project");
  if (idx > -1) {
    projectNav.hidden = false;
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= featuredProjects.length - 1;
  } else {
    projectNav.hidden = true;
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  overlay.scrollTop = 0;
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  openProjectId = null;
  syncOpenCardBorder();
}

document.getElementById("modal-back").addEventListener("click", closeModal);

// Prev/next between Featured Projects only (not experience/leadership —
// those never populate featuredProjects, so idx stays -1 and the nav stays
// hidden for them; see openModal).
document.getElementById("modal-prev-project").addEventListener("click", () => {
  const idx = featuredProjects.findIndex(p => p.id === openProjectId);
  if (idx > 0) openModal(featuredProjects[idx - 1]);
});
document.getElementById("modal-next-project").addEventListener("click", () => {
  const idx = featuredProjects.findIndex(p => p.id === openProjectId);
  if (idx > -1 && idx < featuredProjects.length - 1) openModal(featuredProjects[idx + 1]);
});

// ---------------- Lightbox (click any project photo to enlarge, with
// caption and prev/next through that project's own photos) ----------------
const lightbox = document.getElementById("lightbox-overlay");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
let lightboxIndex = 0;

function openLightboxAt(index) {
  if (!currentGallery.length) return;
  lightboxIndex = (index + currentGallery.length) % currentGallery.length;
  const entry = currentGallery[lightboxIndex];
  lightboxImg.src = entry.src;
  lightboxImg.alt = entry.caption;
  lightboxCaption.textContent = entry.caption;
  lightbox.classList.add("open");
}

function shiftLightbox(delta) {
  openLightboxAt(lightboxIndex + delta);
}

function lightboxClickHandler(e) {
  const img = e.target.closest("img[data-gidx]");
  if (!img) return;
  openLightboxAt(parseInt(img.dataset.gidx, 10));
}
document.querySelector(".modal-body").addEventListener("click", lightboxClickHandler);
document.getElementById("modal-process-content").addEventListener("click", lightboxClickHandler);

document.getElementById("lightbox-prev").addEventListener("click", e => { e.stopPropagation(); shiftLightbox(-1); });
document.getElementById("lightbox-next").addEventListener("click", e => { e.stopPropagation(); shiftLightbox(1); });
document.getElementById("lightbox-close").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") lightbox.classList.remove("open");
  if (e.key === "ArrowLeft") shiftLightbox(-1);
  if (e.key === "ArrowRight") shiftLightbox(1);
});

document.querySelectorAll(".card-grid").forEach(grid => {
  grid.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;
    const project = PROJECTS.find(p => p.id === card.dataset.id);
    if (project) openModal(project);
  });
  grid.addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.classList.contains("card")) {
      const project = PROJECTS.find(p => p.id === e.target.dataset.id);
      if (project) openModal(project);
    }
  });
});

document.getElementById("modal-close").addEventListener("click", closeModal);
overlay.addEventListener("click", e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key !== "Escape" || lightbox.classList.contains("open")) return;
  if (overlay.classList.contains("open")) closeModal();
});

// ---------------- Engineering Toolbox ----------------
// Frame data and the software list live in js/toolbox-data.js
// (TOOLBOX_FRAMES, SOFTWARE_TOOLS) so they're editable without touching
// this state machine.
const toolboxStage = document.getElementById("toolbox-stage");
const toolboxToggle = document.getElementById("toolbox-toggle");
const toolboxHint = document.getElementById("toolbox-hint");
const toolboxBadges = document.getElementById("toolbox-badges");
const toolboxFrameEls = {
  closed: toolboxStage.querySelector('[data-frame="closed"]'),
  partial: toolboxStage.querySelector('[data-frame="partial"]'),
  open: toolboxStage.querySelector('[data-frame="open"]')
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function toolboxBadgeTemplate(tool, index) {
  const media = tool.icon
    ? `<img src="${tool.icon}" alt="">`
    : `<span class="tool-badge-mark">${tool.mark}</span>`;
  const tag = tool.href ? "a" : "button";
  const hrefAttr = tool.href ? ` href="${tool.href}"` : ` type="button"`;
  return `
    <${tag} class="tool-badge" style="left:${tool.position.x}%; top:${tool.position.y}%; transition-delay:${(index * 0.07).toFixed(2)}s"${hrefAttr}
      aria-describedby="tool-tip-${index}">
      ${media}
      <span class="tool-tooltip" role="tooltip" id="tool-tip-${index}">
        <strong>${tool.name}</strong>
        <span>${tool.skills.join(" • ")}</span>
      </span>
    </${tag}>
  `;
}

toolboxBadges.innerHTML = SOFTWARE_TOOLS.map(toolboxBadgeTemplate).join("");

// Preload every frame up front so opening never shows a blank flash.
let framesReady = false;
Promise.all(TOOLBOX_FRAMES.map(src => new Promise(resolve => {
  const img = new Image();
  img.onload = img.onerror = resolve;
  img.src = src;
}))).then(() => {
  framesReady = true;
  toolboxFrameEls.closed.src = TOOLBOX_FRAMES[0];
  toolboxFrameEls.partial.src = TOOLBOX_FRAMES[1];
  toolboxFrameEls.open.src = TOOLBOX_FRAMES[2];
});

let toolboxState = "closed"; // closed | opening | open | closing
let toolboxAnimTimer = null;

function setToolboxState(state) {
  toolboxState = state;
  toolboxStage.dataset.state = state;
}

function openToolbox() {
  if (toolboxState === "open") return;
  clearTimeout(toolboxAnimTimer);
  toolboxToggle.setAttribute("aria-expanded", "true");
  toolboxToggle.setAttribute("aria-label", "Close engineering software toolbox");
  toolboxHint.textContent = "Click to close";
  // Box crossfade and badge stagger both key off data-state="open" directly —
  // the CSS transition itself supplies the motion, no JS-timed steps needed.
  setToolboxState("open");
}

function closeToolbox() {
  if (toolboxState === "closing" || toolboxState === "closed") return;
  clearTimeout(toolboxAnimTimer);
  toolboxToggle.setAttribute("aria-expanded", "false");
  toolboxToggle.setAttribute("aria-label", "Open engineering software toolbox");
  toolboxHint.textContent = "Click to open";

  if (prefersReducedMotion) {
    setToolboxState("closed");
    return;
  }
  // Fade the badges out first (data-state leaves "open" immediately, which
  // hides them), then crossfade the box back to closed a beat later.
  setToolboxState("closing");
  toolboxAnimTimer = setTimeout(() => setToolboxState("closed"), 150);
}

toolboxToggle.addEventListener("click", () => {
  if (toolboxState === "closed") openToolbox();
  else if (toolboxState === "open") closeToolbox();
});
