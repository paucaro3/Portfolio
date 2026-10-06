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
    projects: array of project ids (matching PROJECTS in data.js) that used
              this tool — clicking the badge scrolls to and highlights each
              matching card, so leave this empty rather than guessing if a
              project isn't confirmed to use the tool
    href:     a project URL/anchor to link to, or null to keep the badge
              informational only (no dead link)
*/

const TOOLBOX_FRAMES = [
  "images/toolbox/frames/toolbox-01-closed.png",
  "images/toolbox/frames/toolbox-02-partial.png",
  "images/toolbox/frames/toolbox-03-open.png"
];

const SOFTWARE_TOOLS = [
  { name: "SolidWorks", mark: "SO", icon: "images/toolbox/software/solidworks.png",
    skills: ["CAD", "Assemblies", "Technical Drawings", "Design for Manufacturing"],
    position: { x: 30, y: 12 },
    projects: ["thesis", "senior-design-suspension", "bioelectronic-epilepsy", "bioelectronic-diabetes", "transtibial-prosthetic"],
    href: null },
  // EDIT ME: no project currently confirms AutoCAD in its tags/toolsUsed —
  // tell me which project(s) used it and I'll fill this in.
  { name: "AutoCAD", mark: "AU", icon: "images/toolbox/software/autocad.png",
    skills: ["2D CAD", "Technical Drawings", "Layouts"],
    position: { x: 57, y: 15 },
    projects: [],
    href: null },
  { name: "COMSOL", mark: "CM", icon: "images/toolbox/software/comsol.jpg",
    skills: ["Multiphysics Simulation", "Transport Modeling", "Device Modeling"],
    position: { x: 84, y: 19 },
    projects: ["thesis"],
    href: null },
  { name: "Python", mark: "PY", icon: "images/toolbox/software/python.png",
    skills: ["Data Analysis", "Automation", "Scientific Computing"],
    position: { x: 25, y: 46 },
    projects: ["thesis", "firmware-intern"],
    href: null },
  { name: "MATLAB", mark: "MA", icon: "images/toolbox/software/matlab.jpg",
    skills: ["Data Analysis", "Modeling", "Signal Processing"],
    position: { x: 55, y: 50 },
    projects: ["thesis", "hardware-intern"],
    href: null },
  { name: "Arduino", mark: "AR", icon: "images/toolbox/software/arduino.png",
    skills: ["Embedded Prototyping", "Sensors", "Hardware Control"],
    position: { x: 85, y: 54 },
    projects: ["senior-design-suspension", "syringe-pump"],
    href: null },
  { name: "CoventorWare", mark: "CW", icon: "images/toolbox/software/coventorware.png",
    skills: ["Mask Layout", "MEMS Modeling", "Microfabrication Simulation"],
    position: { x: 30, y: 88 },
    projects: ["thesis", "bioelectronic-epilepsy", "bioelectronic-diabetes"],
    href: null },
  { name: "Gamry Analyst", mark: "GA", icon: "images/toolbox/software/gamry-analyst.jpg",
    skills: ["Electrochemical Characterization", "EIS", "CV", "Data Analysis"],
    position: { x: 57, y: 88 },
    projects: ["thesis", "bioelectronic-diabetes"],
    href: null }
];
