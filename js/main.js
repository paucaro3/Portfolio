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
    modalProcessContent.innerHTML = project.process
      .map((step, i) => processStepTemplate(step, i, `${project.title} — process`))
      .join("");
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

  const idx = featuredProjects.findIndex(p => p.id === project.id);
  modalPagination.textContent = idx > -1
    ? `${String(idx + 1).padStart(2, "0")} / ${String(featuredProjects.length).padStart(2, "0")}`
    : "";

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

// ---------------- Lightbox (click any project photo to enlarge) ----------------
const lightbox = document.getElementById("lightbox-overlay");
const lightboxImg = document.getElementById("lightbox-image");

document.querySelector(".modal-body").addEventListener("click", e => {
  const img = e.target.closest("img");
  if (!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("open");
});
document.getElementById("modal-process-content").addEventListener("click", e => {
  const img = e.target.closest("img");
  if (!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("open");
});
lightbox.addEventListener("click", () => lightbox.classList.remove("open"));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) lightbox.classList.remove("open");
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
