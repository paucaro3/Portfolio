/*
  EDIT THIS FILE to add/change your projects, experience, and leadership entries.
  Each item follows the same shape — copy an existing one and edit the fields.

  category: "research" | "experience" | "engineering" | "leadership"
  subjects:     (research/engineering only) array of filter tags shown in the
                Featured Projects filter bar — pick from: "research",
                "sensors", "devices", "mechanics", "fabrication". A project
                can carry more than one; it appears under any filter it has.
  thumb:        card thumbnail image
  finalImages:  photos of the finished result. finalImages[0] is the modal's
                big hero image; finalImages[1..3] show as 3 small supporting
                thumbnails beside it. Anything beyond index 3 won't display
                up top — move it into processImages instead.
  processImages: (optional) build/process/analysis photos — shown further down
                 under a "Process" heading, in a captioned grid (captions are
                 auto-derived from the filename, e.g. "thesis-process-mask-
                 layout.jpg" -> "Mask Layout")
  images:       fallback gallery used only if finalImages isn't set (older entries)
  heroCaption:  (optional) short handwritten-style note under the hero image
  description:      HTML shown under the title (the "what it is / result" summary)
  processDescription: (optional) HTML shown under the process gallery
  problem:      (optional) 1-2 sentences for the sidebar's "The Problem" block
  role:         (optional) 1-2 sentences for the sidebar's "My Role" block
  keyResults:   (optional) array of short strings for "Key Results" bullets —
                keep these qualitative unless you've explicitly confirmed
                numbers to publish; real data/plots belong in the images instead
  toolsUsed:    (optional) array of tool names matching the Engineering Toolbox
                list — renders as small monogram badges in the sidebar
  dates, teamSize, myRole: (optional) free-text project metadata, not yet
                surfaced in the UI but kept here for future use
  tags:         short list of skills/tools shown as pills on the card
  reportUrl:    (optional) link for the "VIEW FULL REPORT" button
  videoUrl:     (optional) link for the "WATCH VIDEO" button
  links:        (legacy) [{ label, url }, ...] — still rendered if reportUrl/
                videoUrl aren't set, for projects not yet migrated
*/

const PROJECTS = [
  // ---------------- RESEARCH ----------------
  {
    id: "thesis",
    category: "research",
    subjects: ["sensors", "research"],
    title: "Redox Amplification in Glassy Carbon Electrodes for Glucose Sensing through Sweat",
    tagline: "M.S. Thesis, SDSU Bioengineering — NSF AccelNet: Broadening Carbon Ring",
    thumb: "images/research/thesis-final-device-isolated.png",
    dates: "March 2025 – July 2026",
    teamSize: "Led a 4-person team (3 undergraduate researchers)",
    myRole: "Primary designer, fabricator, and tester",
    problem: "Sweat glucose runs far lower than blood glucose, so a sensor needs to amplify the redox signal just to make it detectable — and today's continuous monitors are still minimally invasive at best.",
    role: "Led a 4-person team as primary designer, fabricator, and tester of the sensor, from concept through characterization.",
    keyResults: [
      "Stable, repeatable CV/EIS behavior across scan rates",
      "Radial electrode geometry survived pyrolysis intact",
      "COMSOL confirmed thickness as a key amplification lever"
    ],
    toolsUsed: ["SolidWorks", "CoventorWare", "COMSOL", "Gamry Analyst", "Python"],
    heroCaption: "Small sensors. Big possibilities.",
    finalImages: [
      "images/research/thesis-final-device-isolated.png",
      "images/research/thesis-process-design-iteration.png"
      // EDIT ME: add the "Seamless Integration" smartwatch concept graphic
      // once saved — pasted in chat, not yet a file I can copy
    ],
    // Interleaved process content — each step is an image (or paired images)
    // beside its own short line, in the order and wording Paulette picked
    // from the thesis defense deck.
    process: [
      { image: "images/research/thesis-process-design-iteration.png", text: "Final Device Iteration" },
      { image: "images/research/thesis-process-mask-layout-v2.png", text: "Full Wafer Mask Layout" },
      { image: "images/research/thesis-process-lithography-flow-full.png", text: "Photolithography Process Overview" },
      { image: "images/research/thesis-process-liftoff-sequence.png", text: "BHF Liftoff" },
      { image: "images/research/thesis-process-testing-setup-single.png", text: "Standard Three-Electrode Setup" },
      { image: "images/research/thesis-process-testing-setup-dual.png", text: "Dual-Potentiostat Four-Electrode Setup" },
      { image: "images/research/thesis-process-wafer-quarter.png", text: "Quarter Wafer Fabrication" },
      { image: "images/research/thesis-final-device-macro.png", text: "Lifted Device" },
      { image: "images/research/thesis-process-hand-clip.png", text: "Clipped Device for Testing" },
      { image: "images/research/thesis-final-device-isolated.png", text: "Final Lifted Device" },
      { images: ["images/research/thesis-process-mask-finger-1.gif", "images/research/thesis-process-mask-finger-2.gif"],
        text: "The concentration is bigger in the thicker electrodes than the thinner electrodes." },
      { image: "images/research/thesis-results-cv-3000rpm.jpg", text: "CV response across scan rates at 3000 rpm" },
      { image: "images/research/thesis-results-cv-2000rpm.jpg", text: "CV response across scan rates at 2000 rpm" },
      { image: "images/research/thesis-results-cv-comparison.jpg", text: "2000 vs. 3000 rpm, side by side." },
      { image: "images/research/thesis-results-randles-sevcik.jpg", text: "Randles-Ševčík analysis confirming the reaction is diffusion-controlled." },
      { image: "images/research/thesis-results-eis-2000rpm.jpg", text: "Impedance spectroscopy at 2000 rpm — Nyquist and Bode." },
      { image: "images/research/thesis-results-eis-3000rpm.jpg", text: "Impedance spectroscopy at 3000 rpm — Nyquist and Bode." },
      { image: "images/research/thesis-process-microfluidic-render.png", text: "Microfluidic testing housing" }
    ],
    tags: ["MEMS Fabrication", "Electrochemistry (CV/EIS)", "COMSOL / FEA", "SOLIDWORKS", "CoventorWare", "Gamry Analyst", "Python"],
    description: `
      <p>A flexible MEMS electrochemical sensor with a redox-amplifying
      glassy carbon electrode geometry, built for non-invasive glucose
      sensing through sweat. Sweat glucose runs far lower than blood
      glucose, so the electrode geometry itself has to amplify the redox
      signal to make it detectable — current continuous monitors remain
      minimally invasive at best.</p>
      <p>Designed around a wearable form factor (clipping onto a smartwatch
      band) to make continuous monitoring more comfortable and accessible —
      especially for prediabetes management and pediatric diabetes care,
      where less-invasive daily monitoring matters most.</p>
    `,
    processDescription: `
      <p>Iterated the radial electrode geometry (width, layout, thickness)
      across multiple batches to balance performance, fabrication
      reliability, and mechanical robustness — modeled in SOLIDWORKS, masks
      drafted in CoventorWare, early data analysis in Python.</p>
      <p>Fabricated via C-MEMS: SU-8 photolithography pyrolyzed into glassy
      carbon (biocompatible, conductive), polyimide insulation (a flexible
      MEMS material), a metal trace layer, a second polyimide layer, and a
      BHF bath to release devices from the wafer.</p>
      <p>Characterized with optical microscopy, CV/EIS on a Gamry Analyst,
      and COMSOL modeling of electrode-thickness effects — see the plots
      below for the scan-rate and concentration results.</p>
      <p><em>Outcome:</em> optimized the electrode geometry, fabrication
      process, and test criteria for the platform. Functionalizing with
      glucose oxidase for a fully wearable device is the next step.</p>
    `,
    links: [
      // EDIT ME: add the poster PDF once you locate/export it — link label
      // e.g. { label: "View Poster (PDF)", url: "thesis-poster.pdf" }
    ]
  },
  {
    id: "senior-design-suspension",
    category: "engineering",
    subjects: ["mechanics", "fabrication"],
    title: "Semi-Active Long Travel Suspension for Off-Road Racing",
    tagline: "Suspension Lead, Team STORM — SDSU Senior Design (ME491), sponsored by Aztec Baja Racing",
    thumb: "https://img.youtube.com/vi/Hz4xkZ26YT0/hqdefault.jpg",
    dates: "August 2024 – May 2025",
    teamSize: "5-person team; suspension lead (not overall team lead)",
    myRole: "Suspension lead",
    problem: "Baja drivers needed adjustable damping to handle rough terrain without sacrificing comfort, plus a tighter turning radius for a better competition score.",
    role: "Suspension lead on a 5-person team — designed, machined, and integrated the front suspension system, and presented the suspension subsystem at competition (the team lead, who held a chief role in the club, presented the overall car).",
    keyResults: [
      "Cut turning radius 15.8% (133 in → 112 in), beating the 10% target",
      "10 in. of vertical wheel travel at 14.7 lb total system weight",
      "Placed 2nd in sled pull at the Arizona SAE Baja competition"
    ],
    toolsUsed: ["SolidWorks", "Arduino"],
    finalImages: [
      "youtube:Hz4xkZ26YT0",
      "images/engineering/suspension-thumb.jpg",
      "images/engineering/suspension-full-car.jpg",
      "images/engineering/suspension-pov-drive.jpg"
    ],
    // Interleaved process content — order, grouping, and wording picked by
    // Paulette via the clickable slide-picker across the four source decks.
    process: [
      { image: "images/engineering/suspension-process-exploded-view.png", text: "Exploded view of front suspension" },
      { image: "images/engineering/suspension-process-assembly-integration.png", text: "Front suspension assembly integration" },
      { image: "images/engineering/suspension-process-labeled-assembly.png", text: "Labeled assembly" },
      { image: "images/engineering/suspension-final-assembly.jpg", text: "Finished assembly" },
      { image: "images/engineering/suspension-process-upright-fea.png", text: "Upright FEA" },
      { image: "images/engineering/suspension-process-final-upright-fea.png", text: "Final upright FEA" },
      { image: "images/engineering/suspension-process-lower-control-arm.png", text: "Lower control arm" },
      { image: "images/engineering/suspension-process-lower-control-arm-fea.png", text: "Lower control arm FEA" },
      { image: "images/engineering/suspension-process-electronics-test-stand.gif", text: "Electronics test stand" },
      { image: "images/engineering/suspension-process-electronics-stiffness-results.png", text: "Electronics test stand results measuring stiffness" },
      { image: "images/engineering/suspension-process-gantt-chart.png", text: "Gantt Chart" },
      { image: "images/engineering/suspension-process-budget-overview.png", text: "Budget Overview" },
      { image: "images/engineering/suspension-process-system-diagram.png", text: "System diagram" },
      { images: ["images/engineering/suspension-process-physical-testing-1.gif", "images/engineering/suspension-process-physical-testing-2.gif"],
        text: "Physical testing" },
      { image: "images/engineering/suspension-process-front-suspension-view.jpg", text: "Front suspension view" },
      { image: "images/engineering/suspension-process-welding-fixture-upper.jpg", text: "Welding fixtures for upper control arm" },
      { image: "images/engineering/suspension-process-welding-fixture-lower.jpg", text: "Welding fixtures for lower control arm" },
      { image: "images/engineering/suspension-process-electronics-initial.jpg", text: "Initial electronics for user based dampening" },
      { image: "images/engineering/suspension-process-electronics-final.png", text: "Final electronics for user based dampening" }
    ],
    tags: ["SOLIDWORKS", "FEA", "Arduino", "Manufacturing", "Testing & Validation"],
    description: `
      <p>Baja team drivers needed a way to adjust damping in real time —
      preventing the car from bottoming out on rough terrain while staying
      comfortable on smoother sections — plus a tighter turning radius for a
      better competition score. As suspension lead on a 5-person team, I
      designed, machined, and integrated a double-wishbone front suspension
      with a driver-selectable 2-position damper, controlled via steering
      wheel buttons wired to an Arduino Nano that triggers solenoids on the
      shocks.</p>
      <p>Final system: 10 inches of vertical wheel travel, 4130 chromoly and
      6061-T6 aluminum construction, 14.7 lb total system weight. Across 48
      combined hours of testing over two weekends, the redesigned geometry
      cut the turning radius 15.8% (133 in → 112 in, beating our 10% target),
      the electronic dampers activated reliably on driver input, and the
      structure held up through 2-foot drops and "whoops" terrain in the
      desert. We presented the finished suspension at the Arizona SAE Baja
      competition, where the car placed 2nd in sled pull.</p>
    `,
    links: []
  },
  {
    id: "bioelectronic-epilepsy",
    category: "research",
    subjects: ["devices", "research"],
    title: "BioAura — Bioelectronic Device for Epileptic Seizure Management",
    tagline: "Research Project, NanoFAB.SDSU — presented at the SDSU Spring Symposium and the CMEMS Conference at the University of Miami",
    thumb: "images/research/epilepsy-final-concept.jpg",
    dates: "October 2024 – March 2025",
    teamSize: "Led a team of 4",
    myRole: "Team lead",
    problem: "Existing VNS therapy for epilepsy is open-loop — it stimulates on a fixed schedule rather than responding to what's happening in the body, limiting how precise or personalized it can be.",
    role: "Led a 4-person team from concept through design, FEA, and fabrication.",
    keyResults: [
      "Completed the 4-layer C-MEMS fabrication process for the cuff electrode",
      "ANSYS FEA characterized bending-load stress and deformation on the flexible cuff",
      "Three design iterations improved implantability and mechanical strength"
    ],
    toolsUsed: ["SolidWorks", "CoventorWare", "ANSYS"],
    finalImages: [
      "images/research/epilepsy-final-concept.jpg",
      "images/research/epilepsy-final-vns-animation.mp4",
      "images/research/epilepsy-final-cuff-mechanism.mp4",
      "images/research/epilepsy-final-wafer-1.jpg",
      "images/research/epilepsy-final-wafer-2.jpg"
    ],
    // Interleaved process content — order, grouping, and wording picked by
    // Paulette via the clickable slide-picker across all three source decks.
    process: [
      { image: "images/research/epilepsy-final-concept.jpg", text: "Device concept" },
      { image: "images/research/epilepsy-process-cuff-wrap-mechanism.gif", text: "Device wrap mechanism" },
      { image: "images/research/epilepsy-process-full-device-concept.jpg", text: "Full device concept" },
      { image: "images/research/epilepsy-process-vagus-nerve-anatomy.png", text: "Vagus nerve description" },
      { image: "images/research/epilepsy-process-fabrication-materials.png", text: "Device fabrication materials and process" },
      { image: "images/research/epilepsy-process-initial-design.png", text: "Initial design" },
      { images: ["images/research/epilepsy-process-ansys-stress-1.png", "images/research/epilepsy-process-ansys-stress-2.png"],
        text: "Ansys stress simulation" },
      { image: "images/research/epilepsy-process-gantt-chart.png", text: "Gantt chart" },
      { image: "images/research/epilepsy-process-quarter-wafer.png", text: "Quarter wafer overview" },
      { image: "images/research/epilepsy-process-mask-layout-full.png", text: "Full mask layout" },
      { image: "images/research/epilepsy-final-team-picture.jpg", text: "Team picture" },
      { image: "images/research/epilepsy-process-closed-loop-diagram.png", text: "Closed loop diagram" },
      { image: "images/research/epilepsy-process-system-diagram.png", text: "System diagram" },
      { images: [
          "images/research/epilepsy-process-initial-concept-1.jpg",
          "images/research/epilepsy-process-initial-concept-2.jpg",
          "images/research/epilepsy-process-initial-concept-3.jpg"
        ], text: "Initial design concepts" },
      { image: "images/research/epilepsy-final-device-design.png", text: "Final device design" },
      { image: "images/research/epilepsy-process-fabrication-exploded.png", text: "Exploded fabrication layer by layer view" },
      { image: "images/research/epilepsy-process-testing-setup-single.jpg", text: "Three electrode electrochemistry setup" },
      { image: "images/research/epilepsy-process-testing-setup-closed-loop.png", text: "Closed loop electrochemistry setup" }
    ],
    tags: ["MEMS Fabrication", "Neurostimulation", "FEA (ANSYS)", "Closed-Loop Systems"],
    description: `
      <p>Vagus nerve stimulation (VNS) is a proven therapy for reducing
      seizure frequency in epilepsy, but existing VNS devices are open-loop —
      they stimulate on a fixed schedule rather than responding to what's
      actually happening in the body. BioAura is a concept for a closed-loop
      alternative: a flexible, implantable cuff electrode that wraps around
      the vagus nerve, senses glutamate and lactate (both linked to seizure
      onset) using glassy carbon electrodes, and triggers targeted
      stimulation in response — aiming for more precise, personalized
      seizure management than a fixed schedule allows.</p>
      <p>Final design: a 4-electrode (900 µm diameter) cuff sized to the
      vagus nerve's actual anatomy (2.0-3.5 mm diameter, 6.3-11 mm
      circumference, cuffed 1-2 cm below the skin in the neck), refined
      across 3 design iterations to improve implantability and strength —
      including replacing bulky bump pads with an insulating flap that eases
      implantation and speeds recovery, and rounding edges for strength and
      comfort.</p>
    `,
    processDescription: `
      <p>Fabrication follows a 4-layer C-MEMS process on a silicon oxide
      wafer: SU8-10 patterned and pyrolyzed into glassy carbon electrodes,
      polyimide insulation, a titanium/platinum metal layer for the
      electrical traces, and a second polyimide layer, before a buffered
      hydrofluoric acid wet-etch releases the finished devices from the
      wafer.</p>
      <p>On the mechanical side, FEA in ANSYS modeled bending-moment loading
      on the flexible cuff (horizontal and vertical) to characterize stress
      and deformation under implantation-relevant loads, while Coventorware
      built and masked the 4-layer process stack. Closed-loop stimulation
      parameters were scoped against FDA limits: current (0.25-3.5 mA vs. a
      12 mA limit), pulse width (250-500 µs), frequency (30 Hz vs. a 145 Hz
      limit), and a 30-second-on / 5-minute-off duty cycle.</p>
      <p>Next steps: in vitro electrochemical testing of the sensing
      electrodes, defining closed-loop stimulation thresholds, and eventual
      testing in animal models.</p>
    `,
    links: []
  },
  {
    id: "bioelectronic-diabetes",
    category: "research",
    subjects: ["devices", "research"],
    title: "MEMS Cuff Electrode for Vagus Nerve Stimulation in Diabetes Management",
    tagline: "Research Project, NanoFAB.SDSU — SDSU Spring Symposium & a U.S.-Mexico border health conference · Undergraduate Research Excellence Award",
    thumb: "images/research/diabetes-final-device.jpg",
    dates: "May 2023 – March 2025",
    teamSize: "Joined a team of 3 graduate students as an undergrad; later took over as team lead",
    myRole: "Team lead (later stage)",
    problem: "Research shows vagus nerve stimulation can enhance insulin sensitivity, offering a potential complement to insulin therapy. This project designed a flexible, implantable cuff electrode sized to the vagus nerve, with an integrated locking mechanism to hold it in place.",
    role: "Joined as an undergraduate researcher on a team with three graduate students, then took over as team lead, continuing through the project's conclusion.",
    keyResults: [
      "Completed bench characterization (EIS/CV) confirming electrode function",
      "Implanted a prototype cuff in an initial in-vivo mouse trial comparing ventilated vs. non-ventilated conditions"
    ],
    toolsUsed: ["SolidWorks", "CoventorWare", "Gamry Analyst"],
    finalImages: [
      "images/research/diabetes-final-device.jpg",
      "images/research/diabetes-final-wafer-1.jpg",
      "images/research/diabetes-final-wafer-2.jpg",
      "images/research/diabetes-final-mounted.jpg"
    ],
    // Interleaved process content — order, grouping, and wording picked by
    // Paulette via the clickable slide-picker across all three source decks.
    process: [
      { image: "images/research/diabetes-process-device-concept.jpg", text: "Device concept" },
      { image: "images/research/diabetes-process-design-v1.png", text: "Design V1" },
      { image: "images/research/diabetes-process-v1-mask-layout.png", text: "V1 full mask layout" },
      { image: "images/research/diabetes-process-electrochemistry-setup.png", text: "Electrochemistry setup" },
      { image: "images/research/diabetes-process-lifted-devices.png", text: "Lifted devices" },
      { images: ["images/research/diabetes-process-design-v2-1.png", "images/research/diabetes-process-design-v2-2.png"],
        text: "Design V2" },
      { images: ["images/research/diabetes-process-design-v3-1.png", "images/research/diabetes-process-design-v3-2.jpg"],
        text: "Design V3" },
      { image: "images/research/diabetes-process-v2-fabricated.png", text: "V2 fabricated device" },
      { image: "images/research/diabetes-process-v2-lifted.png", text: "V2 lifted device" },
      { image: "images/research/diabetes-process-v2-cuffing-lock.jpg", text: "V2 cuffing and locking mechanism" },
      { image: "images/research/diabetes-results-eis.png", text: "EIS results" },
      { image: "images/research/diabetes-results-cv-pbs.png", text: "CV results in PBS" },
      { image: "images/research/diabetes-process-mouse-implant-schematic.png", text: "Mouse implantation schematic" },
      { image: "images/research/diabetes-final-mouse-implant-v3.jpg", text: "Mouse implantation with V3 prototype" }
    ],
    tags: ["MEMS Fabrication", "Vagus Nerve Stimulation", "EIS / CV Characterization", "In Vivo Testing"],
    description: `
      <p>Diabetes affects roughly 537 million adults worldwide, and current
      management — lifestyle changes, glucose monitoring, insulin therapy —
      is often invasive and expensive (insulin alone runs $175-$300 per vial
      in the US, with patients typically needing 2-3 vials a month).
      Research shows vagus nerve stimulation (VNS) can enhance insulin
      sensitivity, offering a potential complement to insulin therapy. This
      project designed and fabricated a MEMS cuff electrode to deliver that
      stimulation: a flexible, implantable cuff sized to the vagus nerve
      (sub-millimeter electrodes, circumference set to ~1.5x the nerve's
      diameter) with an integrated locking mechanism to hold it in place.</p>
      <p>The design evolved from early hand-drawn concepts through two
      refined variants (3-electrode and 4-electrode versions) to a final
      design that was fabricated, electrochemically characterized, and
      tested in an initial in vivo mouse implantation — a step further than
      most of my other bioelectronics work, which stopped at bench
      characterization.</p>
      <p>Presented this work with several different collaborator teams,
      including at the SDSU Spring Research Symposium (where it won an
      undergraduate research excellence award) and a U.S.-Mexico border
      health conference framing the cost and accessibility case for both
      countries.</p>
    `,
    links: []
  },
  {
    id: "slm-density-research",
    category: "research",
    subjects: ["fabrication", "research"],
    title: "Effect of SLM Process Parameters on 316L Stainless Steel Density",
    tagline: "WE-BELIEVE Research Program — first research project",
    thumb: "images/engineering/slm-final-printed-cubes.jpg",
    finalImages: [
      "images/engineering/slm-final-printed-cubes.jpg",
      "images/engineering/slm-final-sample-closeup.jpg",
      "images/engineering/slm-final-sample-comparison.jpg",
      "images/engineering/slm-final-pore-analysis.jpg"
    ],
    processImages: [
      "images/engineering/slm-process-taguchi-array.jpg",
      "images/engineering/slm-process-density-setup.jpg",
      "images/engineering/slm-process-grinder.jpg",
      "images/engineering/slm-process-sample-prep.jpg",
      "images/engineering/slm-process-team-polishing.jpg",
      "images/engineering/slm-process-means-plot.jpg",
      "images/engineering/slm-process-sn-plot.jpg",
      "images/engineering/slm-process-lv-density-plot.jpg"
    ],
    tags: ["Design of Experiments (DoE)", "Selective Laser Melting", "Materials Characterization", "Minitab"],
    description: `
      <p>My first research project: studying how selective laser melting
      (SLM) 3D printing parameters affect the final density of 316L
      stainless steel parts — density drives mechanical strength, so
      predicting it from printer settings before printing is valuable for
      process planning. Working with Dionicio Riego under Dr. Torresani, I
      designed a Taguchi Design of Experiments (DoE) — 3 factors (scan
      speed, layer thickness, spot size) at 5 levels each, an L25(5³)
      orthogonal array — to map each parameter's effect on density in just
      25 print runs instead of testing every combination.</p>
      <p>Printed all 25 specimens on a Xact Metal laser printer (fixed laser
      power 120W, hatch spacing 50 microns), then measured density using
      Archimedes' principle (buoyant mass in a fluid) after polishing and
      chemically etching each sample. Measured relative densities ranging
      from about 82% up to 92.5%, and identified a clear threshold in energy
      density (the L/V ratio — laser power over scan velocity) above which
      density plateaued near its maximum, giving a practical target for
      future print settings.</p>
    `,
    processDescription: `
      <p>Prepped each of the 25 samples by grinding and polishing on a
      Struers grinder, then chemically etched them to reveal the
      microstructure before imaging under an optical/SEM microscope.
      Measured porosity from those micrographs in ImageJ (thresholding and
      particle analysis to isolate pores), then cross-checked against the
      Archimedes density measurements.</p>
      <p>Analyzed the DoE results with main-effects plots for means and for
      signal-to-noise ratios, which identified scan speed as the most
      influential factor on density, with layer thickness and spot size
      playing smaller roles.</p>
    `,
    links: []
  },
  {
    id: "transtibial-prosthetic",
    category: "research",
    subjects: ["mechanics", "fabrication"],
    title: "Seahorse-Tail-Inspired Ankle Articulation for 3D-Printed Prosthetics",
    tagline: "3D Printing Prosthetics Group, in collaboration with LIMBER Prosthetics (UCSD)",
    thumb: "images/research/prosthetic-final-cad-hinge.jpg",
    finalImages: [
      "images/research/prosthetic-final-cad-hinge.jpg",
      "images/research/prosthetic-final-printed-joint.jpg",
      "images/research/prosthetic-final-k2-render.jpg",
      "images/research/prosthetic-final-bracket.jpg"
    ],
    processImages: [
      "images/research/prosthetic-process-concept-sketch.jpg",
      "images/research/prosthetic-process-hinge-sketch.jpg",
      "images/research/prosthetic-process-vertebra-render-1.jpg",
      "images/research/prosthetic-process-vertebra-render-2.jpg",
      "images/research/prosthetic-process-joint-assembly.jpg",
      "images/research/prosthetic-process-design-notes.jpg",
      "images/research/prosthetic-process-fea-1.jpg",
      "images/research/prosthetic-process-fea-2.jpg"
    ],
    tags: ["3D Printing", "Biomimicry", "SOLIDWORKS", "FEA"],
    description: `
      <p>LIMBER Prosthetics, a 3D-printing startup out of UCSD, prints
      below-the-knee prosthetics from a 3D scan of the residual limb at
      under a tenth of the cost of traditional devices (which can run up to
      $20,000) — but like most affordable printed prosthetics, its designs
      have no ankle movement, which makes stairs, hills, and uneven ground
      difficult. My team set out to add articulation back in without adding
      cost, electronics, or hydraulics.</p>
      <p>We looked to biomimicry for the answer: a seahorse's tail is square
      in cross-section rather than cylindrical, which is why it can bend and
      grip while resisting crushing and torsion — a square prototype in the
      reference literature returned to its original shape after deformation,
      while a cylindrical one stayed bent. We adapted that segmented,
      square-prism plate structure — connected via the seahorse tail's own
      mix of gliding, peg-and-socket, and ball-and-socket joints — into a
      3D-printed hinge linking the printed leg to the foot, giving passive
      ankle articulation with no added hardware.</p>
    `,
    processDescription: `
      <p>Iterated from early hand-drawn concepts through CAD modeling in
      SOLIDWORKS to a final printed and assembled prototype. The first print
      run's connecting rod was toleranced -0.2 in from baseline and fit too
      loosely; a tighter -0.1 in reprint didn't fit at all — landing on
      -0.15 in as the corrected tolerance for a secure fit, along with
      follow-up fixes to how the hinge attachment holes and spring-retention
      features were positioned.</p>
      <p>A later phase of this work, run with a different team under the
      framing of Medicare's K2 ambulation classification, took a more
      traditional engineering-analysis approach: three hinge-and-foam heel
      designs were modeled and evaluated with FEA in SOLIDWORKS across the
      stance and toe-off phases of gait. The first design showed stress
      concentrations at the heel exceeding the material's yield strength;
      adding a hinge and an EVA foam insert (Design Two), then a second heel
      hinge to improve load transfer (Design Three), progressively smoothed
      out those stress concentrations and reduced peak strain.</p>
    `,
    links: []
  },

  // ---------------- EXPERIENCE ----------------
  {
    id: "lab-manager",
    category: "experience",
    title: "Lab Manager & Mask Layout Lead",
    tagline: "SDSU Research Foundation — NanoFAB.SDSU",
    thumb: "images/experience/lab-manager-final-wafer-macro.jpg",
    finalImages: [
      "images/experience/lab-manager-final-cleanroom-selfie.jpg",
      "images/experience/lab-manager-final-wafer-macro.jpg",
      "images/experience/lab-manager-final-lab-tour.jpg",
      "images/experience/lab-manager-final-team-group.jpg"
    ],
    processImages: [
      "images/experience/lab-manager-process-wafer-macro-1.jpg",
      "images/experience/lab-manager-process-wafer-macro-2.jpg",
      "images/experience/lab-manager-process-wafer-macro-3.jpg",
      "images/experience/lab-manager-process-wafer-batch.jpg",
      "images/experience/lab-manager-process-mrs-conference.jpg",
      "images/experience/lab-manager-process-symposium.jpg",
      "images/experience/lab-manager-process-reception.jpg",
      "images/experience/lab-manager-process-team-dinner.jpg"
    ],
    tags: ["Mask Layout", "MEMS Fabrication", "Cleanroom Processing", "Process Improvement", "SOPs"],
    description: `
      <p>Compiled researchers' individual device designs into complete,
      fabrication-ready mask layouts each semester — combining every
      project's electrode, insulation, and metal layers into four final
      layers on a shared 4-inch wafer (each design fit to a quarter or half
      wafer), then handing off GDS files to an external mask vendor for
      fabrication. Conducted design reviews throughout the process to
      reduce fabrication rework and accelerate project timelines.</p>
      <p>Wrote the lab's Standard Operating Procedure for the Layout Person
      role — covering CoventorWare training, layer naming and labeling
      conventions, file organization by semester and order number, and a
      layout verification checklist — turning what had been tribal
      knowledge into documentation the next layout lead could actually
      follow.</p>
    `,
    processDescription: `
      <p>Co-managed cleanroom training with two other lab managers using a
      shadow → practice → exam pipeline: new researchers shadowed a
      fabrication process twice, practiced it twice with support, then
      passed both a hands-on practical and a written exam before working
      independently.</p>
      <p>Ran weekly design meetings supporting multiple concurrent
      researcher projects per semester, helping each team scope a starting
      layout, feature sizes, and wafer constraints. Also presented my own
      research at the SDSU Student Research Symposium (S3), part of the
      broader NanoFAB research culture this role supported.</p>
    `,
    links: []
  },
  {
    id: "firmware-intern",
    category: "experience",
    title: "Automated Firmware Relay Validation",
    tagline: "Firmware Engineering Intern — Universal Electronics",
    thumb: "images/experience/firmware-intern-thumb.jpg",
    // internship photos are limited — 1 image (or even none) is fine here
    finalImages: ["images/experience/firmware-intern-thumb.jpg"],
    tags: ["Python", "Z-Wave", "Zigbee", "Test Automation", "Embedded Firmware"],
    description: `
      <p>Automated relay validation across 20 embedded firmware safety test
      sequences using Python, Z-Wave, and Zigbee — improving test
      repeatability across multiple hardware platforms and reducing manual
      testing time by an hour per run.</p>
    `,
    links: []
  },
  {
    id: "hardware-intern",
    category: "experience",
    title: "Automated Hardware Validation & Thermal Study",
    tagline: "Hardware Engineering Intern — Universal Electronics",
    thumb: "images/experience/hardware-intern-thumb.jpg",
    finalImages: ["images/experience/hardware-intern-thumb.jpg"],
    tags: ["Hardware Testing", "MATLAB", "DAQ", "DOE", "Oscilloscopes"],
    description: `
      <p>Designed and built an automated hardware validation test equipment
      platform to evaluate thermostat reboot reliability under fluctuating
      voltage, using oscilloscopes and control scripts.</p>
      <p>Ran a thermal distribution study (thermistors, MATLAB, DAQ) that
      identified uneven heat distribution and proposed soak-time adjustments
      (DOE).</p>
    `,
    links: []
  },
  {
    id: "robotics-instructor",
    category: "experience",
    title: "Robotics Instructor",
    tagline: "Smart Mind Robotics — La Mesa, CA",
    thumb: "images/experience/robotics-final-spike-bot-poster.jpg",
    finalImages: [
      "images/experience/robotics-final-obstacle-bot.mp4",
      "images/experience/robotics-final-spike-bot.mp4",
      "images/experience/robotics-final-wedo-car.jpg"
    ],
    processImages: [
      "images/experience/robotics-process-motor-closeup.jpg",
      "images/experience/robotics-process-bin-organization-1.jpg",
      "images/experience/robotics-process-bin-organization-2.jpg"
    ],
    tags: ["Teaching", "STEM Education", "LEGO Robotics"],
    description: `
      <p>Taught robotics principles and programming to students in grades
      3-8, adapting lessons across a wide range of learning styles and
      levels using LEGO WeDo and Spike Prime kits — students built and
      programmed their own motorized robots, from simple wheeled cars to
      more complex sensor-driven builds, and drove them through
      obstacle-course activities in class.</p>
    `,
    processDescription: `
      <p>Also maintained the classroom's build-kit inventory: with
      thousands of loose Technic pieces across dozens of class kits, I set
      up a "sort by color" bin system so students could actually find the
      part they needed mid-build instead of losing lesson time digging
      through mixed bins.</p>
    `,
    links: []
  },

  // ---------------- ENGINEERING ----------------
  {
    id: "rocket",
    category: "engineering",
    subjects: ["mechanics", "fabrication"],
    title: "High-Power Rocket Build & Launch — LOC IV",
    tagline: "LOC Precision IV airframe, AeroTech 29/54mm DMS motor",
    thumb: "images/engineering/rocket-final-launch-poster.jpg",
    finalImages: [
      "images/engineering/rocket-final-launch.mp4",
      "images/engineering/rocket-final-launch-poster.jpg"
      // EDIT ME: add more photo paths here once saved — e.g. group photo,
      // rocket on the pad, solo shot against the sky.
    ],
    processImages: [
      // EDIT ME: add prep/assembly photo paths here once saved
    ],
    tags: ["High-Power Rocketry", "AeroTech DMS Motor", "Recovery Systems"],
    description: `
      <p>Built and launched a high-power rocket: a LOC Precision "IV"
      airframe (23 in. slotted booster, 11 in. payload bay, 38mm motor
      mount, 3 fins, 36 in. parachute recovery on 15 ft of nylon shock cord)
      flown on an AeroTech 29/54mm DMS motor — a certified-flyer-class
      (H-impulse and above) composite reload motor with an adjustable
      ejection delay. Hand-painted the airframe with a full floral design
      rather than leaving it bare, then flew it at a desert high-power
      launch alongside other club rockets.</p>
    `,
    processDescription: `
      <p>Assembly followed the standard high-power build sequence: epoxied
      the aft, mid, and forward centering rings onto the 38mm motor tube,
      decided on motor retention hardware before committing the aft
      centering ring in place, mounted rail buttons for the launch rail, and
      packed the parachute and shock cord for recovery.</p>
      <p>Motor prep followed AeroTech's DMS procedure at the pad: set the
      ejection delay with the drill tool, loaded the black-powder ejection
      charge, and installed the igniter immediately before flight per range
      safety procedure.</p>
    `,
    links: []
  },
  {
    id: "syringe-pump",
    category: "engineering",
    subjects: ["devices", "mechanics"],
    title: "60cc Don't Email Me — Microcontroller-Driven Syringe Pump",
    tagline: "ME 683: Design of Medical Devices, SDSU",
    thumb: "images/engineering/syringe-final-full-setup.jpg",
    finalImages: [
      "images/engineering/syringe-final-full-setup.jpg",
      "images/engineering/syringe-final-electronics-box.jpg",
      "images/engineering/syringe-final-control-panel.jpg"
    ],
    processImages: [
      "images/engineering/syringe-process-force-diagram.jpg",
      "images/engineering/syringe-process-cad-holder.jpg",
      "images/engineering/syringe-process-cad-base.jpg",
      "images/engineering/syringe-process-cad-rail.jpg",
      "images/engineering/syringe-process-wiring.jpg",
      "images/engineering/syringe-process-code.jpg"
    ],
    tags: ["Arduino", "Mechatronics", "OnShape / CAD", "DFM", "Validation Testing"],
    description: `
      <p>Designed, built, and validated a 60 mL luer-lock syringe pump — a
      motorized medical device that dispenses fluid at a precise,
      steady-state rate — with software-selectable flow rates from 2 to 20
      mL/min through both an open outlet and a restricted outlet (a 23G x
      3/4" butterfly infusion set). A stepper motor converts rotational
      motion into linear force on the plunger via a lead screw, driven by an
      Arduino Uno through a CNC motor shield, with 7 buttons for flow-rate
      selection, reverse flow, and an emergency stop.</p>
      <p>Validated the finished pump with real flow-rate testing: measured
      output landed within ±1-3% of the commanded rate on the open outlet
      and ±6-7% on the higher-resistance restricted outlet, with a 5-trial
      repeatability check on the 3 mL/min setting holding within ±3% of the
      mean. Met the design target of precise, repeatable fluid delivery for
      healthcare and lab applications.</p>
    `,
    processDescription: `
      <p>Modeled the syringe holder in OnShape and 3D printed it in PLA — a
      slotted design that reacts the plunger force and holds the syringe
      body stationary, following a basic force-balance analysis of how a
      syringe is used manually (F_plunger ≈ ΔP·A_syringe + F_friction).
      Sized the motor and lead screw against a Poiseuille pressure-drop
      estimate for the restricted outlet, which set the governing case: a
      max torque of 1.21×10⁻² N·m and max pressure of about 54.6 kPa (≈3.06
      N on the plunger) — comfortably within the provided motor's capability.</p>
      <p>Calibrated motor motion empirically rather than trusting the
      theoretical steps/mL figure: measured actual dispensed volume over
      timed runs to arrive at 0.522 mL/rev (open) and 0.422 mL/rev
      (restricted), then used those measured constants — not the calculated
      ones — in the Arduino code driving each flow-rate button.</p>
      <p>Hit real hardware problems along the way: mechanical alignment
      issues caused overshoot on step changes, and the motor ran hot enough
      under sustained restricted-flow operation to warrant adding an
      emergency-stop command. Identified tight tolerances in the 3D printed
      holder as the likely root cause of the alignment issue — the fix we'd
      make next time is a spring-loaded holder that applies gentle pressure
      from above to keep the syringe seated, plus a small display for
      flow-rate feedback instead of button-only control.</p>
    `,
    links: []
  },

  // ---------------- LEADERSHIP ----------------
  {
    id: "bmes",
    category: "leadership",
    title: "Biomedical Engineering Society (BMES)",
    tagline: "Vice President — SDSU",
    thumb: "images/leadership/bmes-final-masimo-group.jpg",
    finalImages: [
      "images/leadership/bmes-final-masimo-group.jpg",
      "images/leadership/bmes-final-tabling-indoor.jpg",
      "images/leadership/bmes-final-industry-night.jpg",
      "images/leadership/bmes-final-tabling-outdoor.jpg"
    ],
    processImages: [
      "images/leadership/bmes-process-planning-diagram.jpg",
      "images/leadership/bmes-process-panel-1.jpg",
      "images/leadership/bmes-process-panel-2.jpg",
      "images/leadership/bmes-process-robotics-tour-1.jpg",
      "images/leadership/bmes-process-robotics-tour-2.jpg",
      "images/leadership/bmes-process-masimo-meeting.jpg",
      "images/leadership/bmes-process-masimo-lobby.jpg"
    ],
    tags: ["Event Planning", "Industry Outreach", "Professional Development"],
    description: `
      <p>Led professional development initiatives by planning weekly general
      body meetings, guest speakers, workshops, and industry/research lab
      tours. Founded the project subteam, achieved official BMES national
      chapter recognition for SDSU, and grew membership from 11 to 26.</p>
      <p>Organized an Industry Night professional panel and personally
      recruited several of its confirmed speakers — including engineers from
      Solar Turbines, ASML, and Qualcomm — alongside panelists from Masimo
      and BD. Arranged facility tours to Masimo's headquarters and Rady
      Children's Motion Analysis Lab, plus on-campus lab tours (NanoFAB,
      the Additive Manufacturing & Advanced Materials Lab, and a
      cardiovascular tissue biomechanics lab).</p>
    `,
    processDescription: `
      <p>Ran a Digital Portfolio Workshop for members — covering how a
      portfolio differs from a resume, what to include (process, tools,
      results, not just outcomes), and free website builders to get started
      with — to help members present their project work to employers and
      grad programs.</p>
      <p>Behind the scenes, maintained a running contact tracker for guest
      speakers and lab tours (confirmation status, company, role, LinkedIn)
      to keep outreach organized across a full semester of weekly
      programming.</p>
    `,
    links: []
  },
  {
    id: "asme",
    category: "leadership",
    title: "American Society of Mechanical Engineers (ASME)",
    tagline: "President, Treasurer — SDSU",
    thumb: "images/leadership/asme-final-tabling.jpg",
    finalImages: [
      "images/leadership/asme-final-tabling.jpg",
      "images/leadership/asme-final-gbm-group.jpg",
      "images/leadership/asme-final-info-session.jpg"
    ],
    processImages: [
      "images/leadership/asme-process-blanket-1.jpg",
      "images/leadership/asme-process-blanket-2.jpg",
      "images/leadership/asme-process-bowling-flyer.jpg"
    ],
    tags: ["Event Planning", "Budget Management", "Community Outreach"],
    description: `
      <p>Led meetings and grew paid membership by 165% through active
      outreach and value-driven programming. As treasurer, secured a
      $17,000 grant through a funding proposal and managed budgeting and
      reimbursements.</p>
      <p>Organized a full year of weekly general body and design-team
      meetings, alongside industry site tours (Solar Turbines, Dexcom, UC
      San Diego labs) and cross-club social events — an ASME x SHPE bowling
      night, an ASME x SWE jewelry workshop, a bonfire, and trivia night.</p>
    `,
    processDescription: `
      <p>Also ran a blanket-making community service event and tabled at
      SDSU's Explore SDSU Open House to recruit new members.</p>
    `,
    links: []
  }
];
