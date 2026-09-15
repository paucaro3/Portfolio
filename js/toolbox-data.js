/*
  Engineering Toolbox — single source of truth for the animated toolbox
  widget in the hero sidebar (see #toolbox in index.html, wired up in main.js).

  TOOLBOX_FRAMES: closed/partial/open stills, keyed-out to transparent PNGs
  from Paulette's own AI-generated style references (images/toolbox/references/)
  as TEMPORARY placeholders — they are not camera-aligned production
  animation frames, so main.js only crossfades directly between "closed" and
  "open" (frame 0 and frame 2); "partial" is kept here for whenever aligned
  production frames replace these, at which point main.js can step through
  the full sequence instead of a straight crossfade.

  SOFTWARE_TOOLS: one entry per badge shown once the toolbox is open.
    name:     shown in the tooltip title
    mark:     2-letter monogram fallback shown on the badge itself
    icon:     path to a real logo file once one exists, else null
    skills:   short phrases shown in the tooltip
    position: { x, y } percentages, relative to the open toolbox image, used
              to place the badge over its tray
    href:     a project URL/anchor to link to, or null to keep the badge
              informational only (no dead link)
*/

const TOOLBOX_FRAMES = [
  "images/toolbox/frames/toolbox-01-closed.png",
  "images/toolbox/frames/toolbox-02-partial.png",
  "images/toolbox/frames/toolbox-03-open.png"
];

const SOFTWARE_TOOLS = [
  // EDIT ME: real logo files go in images/toolbox/software/ — point `icon`
  // at one and it replaces the monogram automatically (see toolboxBadgeTemplate).
  { name: "SolidWorks", mark: "SO", icon: null,
    skills: ["CAD", "Assemblies", "Technical Drawings", "Design for Manufacturing"],
    position: { x: 30, y: 16 }, href: null },
  { name: "AutoCAD", mark: "AU", icon: null,
    skills: ["2D CAD", "Technical Drawings", "Layouts"],
    position: { x: 57, y: 19 }, href: null },
  { name: "COMSOL", mark: "CM", icon: null,
    skills: ["Multiphysics Simulation", "Transport Modeling", "Device Modeling"],
    position: { x: 84, y: 23 }, href: null },
  { name: "Python", mark: "PY", icon: null,
    skills: ["Data Analysis", "Automation", "Scientific Computing"],
    position: { x: 25, y: 50 }, href: null },
  { name: "MATLAB", mark: "MA", icon: null,
    skills: ["Data Analysis", "Modeling", "Signal Processing"],
    position: { x: 55, y: 54 }, href: null },
  { name: "Arduino", mark: "AR", icon: null,
    skills: ["Embedded Prototyping", "Sensors", "Hardware Control"],
    position: { x: 85, y: 58 }, href: null },
  { name: "CoventorWare", mark: "CW", icon: null,
    skills: ["MEMS Modeling", "Microfabrication Simulation"],
    position: { x: 30, y: 82 }, href: null },
  { name: "Gamry Analyst", mark: "GA", icon: null,
    skills: ["Electrochemical Characterization", "EIS", "CV", "Data Analysis"],
    position: { x: 57, y: 82 }, href: null }
];
