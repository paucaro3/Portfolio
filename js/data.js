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
  process:      (optional, preferred over processImages) the case study's
                step-by-step story, in order. Mix any of these:
                  { image: "path.jpg", text: "Short line beside the photo" }
                  { images: ["a.jpg", "b.jpg"], text: "..." }   — side-by-side pair
                  { heading: "Why this matters", text: "A paragraph..." }
                      — text only, no image: use it to explain what the
                        next photos show (doesn't take a step number)
                  { image: "path.jpg", heading: "...", text: "...", wide: true }
                      — text first, then the photo big underneath it
                  { heading: "...", text: "...", schedule: [
                      { term: "Fall 2025", events: [
                        { date: "Sep 8", type: "GBM", title: "Welcome GBM" }, ...
                      ] }, ...
                    ] }
                      — a "year at a glance" event list, one column per
                        term; type "Speaker" and "Tour" are highlighted red
                An `images` step can take `columns: 3` to lay a big set out
                in a fixed grid instead of one long row, and `labels: [...]`
                (one per image) to tag each image or clip in its corner.
                Any image step can also take a `heading` and/or `caption`
                (handwritten-style label).
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
  dates:        (optional) "Month Year – Month Year" — REQUIRED for this project
                to appear on the sidebar Timeline at all; parsed for start/end
                year, so keep that "Month Year – Month Year" shape
  teamSize, myRole: (optional) free-text project metadata, not yet surfaced
                in the UI but kept here for future use
  teamPhoto:    (optional) path to a team photo shown in its own sidebar
                block ("The Team") — omit if there's no group photo for this one
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
    tagline: "M.S. Thesis, SDSU Bioengineering · NSF AccelNet: Broadening Carbon Ring",
    thumb: "images/research/thesis-final-smartwatch-integration.jpg",
    dates: "March 2025 – July 2026",
    teamSize: "Led a 4-person team (3 undergraduate researchers)",
    myRole: "Primary designer, fabricator, and tester",
    problem: "Sweat glucose runs far lower than blood glucose, so a sensor needs to amplify the redox signal just to make it detectable, and today's continuous monitors are still minimally invasive at best.",
    role: "Led a 4-person team as primary designer, fabricator, and tester of the sensor, from concept through characterization.",
    keyResults: [
      "Stable, repeatable CV/EIS behavior across scan rates",
      "Radial electrode geometry survived pyrolysis intact",
      "COMSOL confirmed thickness as a key amplification lever"
    ],
    toolsUsed: ["SolidWorks", "CoventorWare", "COMSOL", "Gamry Analyst", "MATLAB", "Python"],
    heroCaption: "Small sensors. Big possibilities.",
    finalImages: [
      "images/research/thesis-final-smartwatch-integration.jpg",
      "images/research/thesis-final-device-isolated.png",
      "images/research/thesis-process-design-iteration.png"
    ],
    // Story-style case study: each heading/text section explains the photos
    // that follow it. Photos and captions are the ones Paulette picked from
    // her source decks; the sections reuse the project's own write-up.
    process: [
      { heading: "The idea: redox cycling",
        text: "The concept is a wearable patch on the inner wrist that reads glucose from sweat and sends it to a phone over Bluetooth. Its 3D carbon electrodes are interdigitated: a generator (G) and collector (C) sit side by side, so a molecule reduced (R) at one is oxidized (O) at the other and cycles back and forth, amplifying the signal. Taller electrodes give each molecule more surface to cycle between, so a thicker electrode means more amplification." },
      { image: "images/research/thesis-process-redox-cycling.mp4", wide: true,
        text: "Proposed solution: redox cycling between generator and collector electrodes, and how a thicker electrode boosts the amplification" },
      { image: "images/research/thesis-process-design-specs.png", wide: true,
        text: "Design specifications I set for the device, from inner-wrist placement and a flexible polyimide substrate to a 10-1000 µM sensing range and 7-14 day wear" },
      { heading: "Designing the electrode",
        text: "Iterated the radial electrode geometry (width, layout, thickness) across multiple batches to balance performance, fabrication reliability, and mechanical robustness. Modeled in SOLIDWORKS, drafted masks in CoventorWare, and ran early data analysis in Python." },
      { image: "images/research/thesis-process-design-inspiration.mp4", wide: true,
        text: "Design inspiration: La Luna. The moon inspired the first hand-drawn spiral layouts, which evolved into the interdigitated generator-collector spirals" },
      { image: "images/research/thesis-process-design-evolution.png", wide: true,
        text: "Design evolution: the La Luna and La Gitana generations led to El Hijo, the final design" },
      { image: "images/research/thesis-process-design-iteration.png", text: "El Hijo, the final device iteration" },
      { image: "images/research/thesis-process-mask-layout-v2.png", text: "Full Wafer Mask Layout" },
      { heading: "Fabrication",
        text: "Fabricated via C-MEMS: SU-8 photolithography pyrolyzed into glassy carbon (biocompatible, conductive), polyimide insulation (a flexible MEMS material), a metal trace layer, a second polyimide layer, and a BHF bath to release devices from the wafer." },
      { image: "images/research/thesis-process-lithography-flow-full.png", text: "Photolithography Process Overview" },
      { image: "images/research/thesis-process-liftoff-sequence.png", text: "BHF Liftoff" },
      { image: "images/research/thesis-process-wafer-quarter.png", text: "Quarter Wafer Fabrication" },
      { image: "images/research/thesis-final-device-macro.png", text: "Lifted Device" },
      { heading: "Testing setup",
        text: "Characterized the devices with optical microscopy and CV/EIS on a Gamry Analyst, using both a standard three-electrode setup and a dual-potentiostat four-electrode setup, plus a microfluidic housing for testing." },
      { image: "images/research/thesis-process-testing-setup-single.png", text: "Standard Three-Electrode Setup" },
      { image: "images/research/thesis-process-testing-setup-dual.png", text: "Dual-Potentiostat Four-Electrode Setup" },
      { image: "images/research/thesis-process-hand-clip.png", text: "Clipped Device for Testing" },
      { image: "images/research/thesis-process-microfluidic-render.png", text: "Microfluidic testing housing" },
      { heading: "Modeling and results",
        text: "COMSOL modeling showed how electrode thickness affects amplification, and the CV and EIS results below show the scan-rate and concentration behavior at two spin speeds." },
      { image: "images/research/thesis-results-fea-summary.png", wide: true,
        text: "FEA results at t = 32 s: ferrocyanide concentration climbs steadily with electrode thickness, from 3.06 × 10⁵ mol/m³ at 75 µm to 5.00 × 10⁵ mol/m³ at 150 µm" },
      { images: [
          "images/research/thesis-results-comsol-ferro-75um.mp4",
          "images/research/thesis-results-comsol-ferro-100um.mp4",
          "images/research/thesis-results-comsol-ferro-125um.mp4",
          "images/research/thesis-results-comsol-ferro-150um.mp4"
        ], columns: 2, wide: true, labels: ["75 µm", "100 µm", "125 µm", "150 µm"],
        text: "COMSOL simulation of ferrocyanide concentration over time at four electrode thicknesses: the concentration is bigger in the thicker electrodes than the thinner ones" },
      { image: "images/research/thesis-results-cv-3000rpm.jpg", text: "CV response across scan rates at 3000 rpm" },
      { image: "images/research/thesis-results-cv-2000rpm.jpg", text: "CV response across scan rates at 2000 rpm" },
      { image: "images/research/thesis-results-cv-comparison.jpg", text: "2000 vs. 3000 rpm, side by side." },
      { image: "images/research/thesis-results-randles-sevcik.jpg", text: "Randles-Ševčík analysis confirming the reaction is diffusion-controlled." },
      { image: "images/research/thesis-results-eis-2000rpm.jpg", text: "Impedance spectroscopy at 2000 rpm: Nyquist and Bode." },
      { image: "images/research/thesis-results-eis-3000rpm.jpg", text: "Impedance spectroscopy at 3000 rpm: Nyquist and Bode." },
      { heading: "Outcome",
        text: "Optimized the electrode geometry, fabrication process, and test criteria for the platform. Functionalizing with glucose oxidase for a fully wearable device is the next step." },
      { image: "images/research/thesis-process-defense.jpg", text: "Defending my thesis", wide: true },
      { image: "images/research/thesis-acknowledgements.jpg", wide: true,
        text: "Acknowledgements: the NSF, my mentors, lab mates, and friends who made this work possible" }
    ],
    tags: ["MEMS Fabrication", "Electrochemistry (CV/EIS)", "COMSOL / FEA", "SOLIDWORKS", "CoventorWare", "Gamry Analyst", "Python"],
    description: `
      <p>A flexible MEMS electrochemical sensor with a redox-amplifying
      glassy carbon electrode geometry, built for non-invasive glucose
      sensing through sweat. Sweat glucose runs far lower than blood
      glucose, so the electrode geometry itself has to amplify the redox
      signal to make it detectable. Current continuous monitors remain
      minimally invasive at best.</p>
      <p>Designed around a wearable form factor (clipping onto a smartwatch
      band) to make continuous monitoring more comfortable and accessible,
      especially for prediabetes management and pediatric diabetes care,
      where less-invasive daily monitoring matters most.</p>
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
    tagline: "Suspension Lead, Team STORM, SDSU Senior Design (ME491), sponsored by Aztec Baja Racing",
    thumb: "https://img.youtube.com/vi/Hz4xkZ26YT0/hqdefault.jpg",
    dates: "August 2024 – May 2025",
    teamPhoto: "images/engineering/suspension-final-design-team.jpg",
    teamSize: "5-person team; suspension lead (not overall team lead)",
    myRole: "Suspension lead",
    problem: "Baja drivers needed adjustable damping to handle rough terrain without sacrificing comfort, plus a tighter turning radius for a better competition score.",
    role: "Suspension lead on a 5-person team: designed, machined, and integrated the front suspension system, and presented the suspension subsystem at competition (the team lead, who held a chief role in the club, presented the overall car).",
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
    // Story-style case study: each heading/text section explains the photos
    // that follow it. Photos and captions are the ones Paulette picked from
    // her source decks; the sections reuse the project's own write-up.
    process: [
      { heading: "Planning the project",
        text: "As suspension lead on a 5-person team, I mapped out the system, the schedule, and the budget before any parts were made." },
      { image: "images/engineering/suspension-process-system-diagram.png", text: "System diagram" },
      { images: [
          "images/engineering/suspension-process-gantt-chart.png",
          "images/engineering/suspension-process-budget-overview.png"
        ], text: "Gantt chart and budget overview" },
      { heading: "Designing the front suspension",
        text: "A double-wishbone front suspension with 10 inches of vertical wheel travel, built from 4130 chromoly and 6061-T6 aluminum at 14.7 lb total, with geometry redesigned for a tighter turning radius." },
      { image: "images/engineering/suspension-process-exploded-view.png", text: "Exploded view of front suspension" },
      { image: "images/engineering/suspension-process-assembly-integration.png", text: "Front suspension assembly integration" },
      { image: "images/engineering/suspension-process-labeled-assembly.png", text: "Labeled assembly" },
      { heading: "Checking it with FEA",
        text: "Before anything was machined, the upright and lower control arm were analyzed with FEA." },
      { images: [
          "images/engineering/suspension-process-upright-fea.png",
          "images/engineering/suspension-process-final-upright-fea.png"
        ], text: "Upright FEA, and the final upright FEA" },
      { images: [
          "images/engineering/suspension-process-lower-control-arm.png",
          "images/engineering/suspension-process-lower-control-arm-fea.png"
        ], text: "Lower control arm and its FEA" },
      { heading: "Building it",
        text: "Machined and integrated the suspension, using welding fixtures to hold the upper and lower control arms in place." },
      { images: [
          "images/engineering/suspension-process-welding-fixture-upper.jpg",
          "images/engineering/suspension-process-welding-fixture-lower.jpg"
        ], text: "Welding fixtures for the upper and lower control arms" },
      { image: "images/engineering/suspension-process-front-suspension-view.jpg", text: "Front suspension view" },
      { image: "images/engineering/suspension-final-assembly.jpg", text: "Finished assembly" },
      { heading: "Driver-adjustable damping",
        text: "Steering wheel buttons are wired to an Arduino Nano that triggers solenoids on the shocks, so drivers can switch the 2-position damper in real time." },
      { images: [
          "images/engineering/suspension-process-electronics-initial.jpg",
          "images/engineering/suspension-process-electronics-final.png"
        ], text: "Initial and final electronics for user based dampening" },
      { images: [
          "images/engineering/suspension-process-electronics-test-stand.gif",
          "images/engineering/suspension-process-electronics-stiffness-results.png"
        ], text: "Electronics test stand, and its results measuring stiffness" },
      { heading: "Testing in the desert",
        text: "Tested for 48 combined hours over two weekends, including 2-foot drops and \"whoops\" terrain." },
      { images: [
          "images/engineering/suspension-process-physical-testing-1.gif",
          "images/engineering/suspension-process-physical-testing-2.gif"
        ], text: "Physical testing" },
      { heading: "Competition",
        text: "The team leads presented the finished suspension at the Arizona SAE Baja competition, where the car placed 2nd in sled pull." },
      { image: "images/engineering/suspension-final-arizona-team.jpg", text: "The competition team at Arizona SAE Baja" }
    ],
    tags: ["SOLIDWORKS", "FEA", "Arduino", "Manufacturing", "Testing & Validation"],
    description: `
      <p>Baja team drivers needed a way to adjust damping in real time,
      preventing the car from bottoming out on rough terrain while staying
      comfortable on smoother sections, plus a tighter turning radius for a
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
    title: "BioAura: Bioelectronic Device for Epileptic Seizure Management",
    tagline: "Research Project, NanoFAB.SDSU. Presented at the SDSU Spring Symposium and the CMEMS Conference at the University of Miami",
    thumb: "images/research/epilepsy-final-concept.jpg",
    dates: "October 2024 – March 2025",
    teamPhoto: "images/research/epilepsy-final-symposium-team.jpg",
    teamSize: "Led a team of 4",
    myRole: "Team lead",
    problem: "Existing VNS therapy for epilepsy is open-loop: it stimulates on a fixed schedule rather than responding to what's happening in the body, limiting how precise or personalized it can be.",
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
    // Story-style case study: each heading/text section explains the photos
    // that follow it. Photos and captions are the ones Paulette picked from
    // her source decks; the sections reuse the project's own write-up.
    process: [
      { heading: "The concept",
        text: "BioAura is a closed-loop cuff that wraps around the vagus nerve, senses glutamate and lactate, and triggers stimulation in response instead of on a fixed schedule." },
      { image: "images/research/epilepsy-final-concept.jpg", text: "Device concept" },
      { image: "images/research/epilepsy-process-cuff-wrap-mechanism.gif", text: "Device wrap mechanism" },
      { image: "images/research/epilepsy-process-full-device-concept.jpg", text: "Full device concept" },
      { images: [
          "images/research/epilepsy-process-closed-loop-diagram.png",
          "images/research/epilepsy-process-system-diagram.png"
        ], text: "Closed loop diagram and system diagram" },
      { heading: "Designing for the vagus nerve",
        text: "The cuff is sized to the nerve's actual anatomy (2.0-3.5 mm diameter, 6.3-11 mm circumference) and went through 3 design iterations, from early sketches to a final 4-electrode design." },
      { image: "images/research/epilepsy-process-vagus-nerve-anatomy.png", text: "Vagus nerve description" },
      { images: [
          "images/research/epilepsy-process-initial-concept-1.jpg",
          "images/research/epilepsy-process-initial-concept-2.jpg",
          "images/research/epilepsy-process-initial-concept-3.jpg"
        ], text: "Initial design concepts" },
      { image: "images/research/epilepsy-process-initial-design.png", text: "Initial design" },
      { image: "images/research/epilepsy-final-device-design.png", text: "Final device design" },
      { heading: "Modeling stress",
        text: "FEA in ANSYS modeled bending-moment loading on the flexible cuff (horizontal and vertical) to characterize stress and deformation under implantation-relevant loads." },
      { images: [
          "images/research/epilepsy-process-ansys-stress-1.png",
          "images/research/epilepsy-process-ansys-stress-2.png"
        ], text: "Ansys stress simulation" },
      { heading: "Fabrication",
        text: "Fabrication follows a 4-layer C-MEMS process on a silicon oxide wafer: SU8-10 patterned and pyrolyzed into glassy carbon electrodes, polyimide insulation, a titanium/platinum metal layer for the electrical traces, and a second polyimide layer, before a buffered hydrofluoric acid wet-etch releases the finished devices from the wafer. The 4-layer process stack was built and masked in CoventorWare." },
      { image: "images/research/epilepsy-process-fabrication-materials.png", text: "Device fabrication materials and process" },
      { image: "images/research/epilepsy-process-fabrication-exploded.png", text: "Exploded fabrication layer by layer view" },
      { image: "images/research/epilepsy-process-quarter-wafer.png", text: "Quarter wafer overview" },
      { image: "images/research/epilepsy-process-mask-layout-full.png", text: "Full mask layout" },
      { heading: "Stimulation and testing",
        text: "Closed-loop stimulation parameters were scoped against FDA limits: current (0.25-3.5 mA vs. a 12 mA limit), pulse width (250-500 µs), frequency (30 Hz vs. a 145 Hz limit), and a 30-second-on / 5-minute-off duty cycle. Next steps: in vitro electrochemical testing of the sensing electrodes, defining closed-loop stimulation thresholds, and eventual testing in animal models." },
      { image: "images/research/epilepsy-process-testing-setup-single.jpg", text: "Three electrode electrochemistry setup" },
      { image: "images/research/epilepsy-process-testing-setup-closed-loop.png", text: "Closed loop electrochemistry setup" },
      { images: [
          "images/research/epilepsy-process-gantt-chart.png",
          "images/research/epilepsy-final-team-picture.jpg"
        ], text: "Project timeline, and the team" },
      { heading: "Presenting at CMEMS",
        text: "Presented the initial BioAura concepts at the 2025 CMEMS conference." },
      { image: "images/research/epilepsy-process-cmems-2025.jpg", wide: true, text: "Presenting the initial concepts at the 2025 CMEMS conference" }
    ],
    tags: ["MEMS Fabrication", "Neurostimulation", "FEA (ANSYS)", "Closed-Loop Systems"],
    description: `
      <p>Vagus nerve stimulation (VNS) is a proven therapy for reducing
      seizure frequency in epilepsy, but existing VNS devices are open-loop:
      they stimulate on a fixed schedule rather than responding to what's
      actually happening in the body. BioAura is a concept for a closed-loop
      alternative: a flexible, implantable cuff electrode that wraps around
      the vagus nerve, senses glutamate and lactate (both linked to seizure
      onset) using glassy carbon electrodes, and triggers targeted
      stimulation in response, aiming for more precise, personalized
      seizure management than a fixed schedule allows.</p>
      <p>Final design: a 4-electrode (900 µm diameter) cuff sized to the
      vagus nerve's actual anatomy (2.0-3.5 mm diameter, 6.3-11 mm
      circumference, cuffed 1-2 cm below the skin in the neck), refined
      across 3 design iterations to improve implantability and strength,
      including replacing bulky bump pads with an insulating flap that eases
      implantation and speeds recovery, and rounding edges for strength and
      comfort.</p>
    `,
    links: []
  },
  {
    id: "bioelectronic-diabetes",
    category: "research",
    subjects: ["devices", "research"],
    title: "MEMS Cuff Electrode for Vagus Nerve Stimulation in Diabetes Management",
    tagline: "Research Project, NanoFAB.SDSU · SDSU Spring Symposium & SDSU Re:Border conference · Undergraduate Research Excellence Award",
    thumb: "images/research/diabetes-final-device.jpg",
    dates: "May 2023 – March 2025",
    teamPhoto: "images/research/diabetes-final-cleanroom-team.jpg",
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
    // Story-style case study: each heading/text section explains the photos
    // that follow it. Photos and captions are the ones Paulette picked from
    // her source decks; the sections reuse the project's own write-up.
    process: [
      { heading: "The idea",
        text: "Vagus nerve stimulation can enhance insulin sensitivity, so this project designed a flexible cuff electrode to deliver it, sized to the vagus nerve with a built-in locking mechanism." },
      { image: "images/research/diabetes-process-device-concept.jpg", text: "Device concept" },
      { heading: "Version 1",
        text: "The first design went from layout to a full mask, then was fabricated, lifted from the wafer, and set up for electrochemical testing." },
      { image: "images/research/diabetes-process-design-v1.png", text: "Design V1" },
      { image: "images/research/diabetes-process-v1-mask-layout.png", text: "V1 full mask layout" },
      { image: "images/research/diabetes-process-lifted-devices.png", text: "Lifted devices" },
      { image: "images/research/diabetes-process-electrochemistry-setup.png", text: "Electrochemistry setup" },
      { heading: "Refining the design",
        text: "Two refined variants followed (3-electrode and 4-electrode versions), including a cuffing and locking mechanism to hold the device in place on the nerve." },
      { images: [
          "images/research/diabetes-process-design-v2-1.png",
          "images/research/diabetes-process-design-v2-2.png"
        ], text: "Design V2" },
      { images: [
          "images/research/diabetes-process-design-v3-1.png",
          "images/research/diabetes-process-design-v3-2.jpg"
        ], text: "Design V3" },
      { image: "images/research/diabetes-process-v2-fabricated.png", text: "V2 fabricated device" },
      { image: "images/research/diabetes-process-v2-lifted.png", text: "V2 lifted device" },
      { image: "images/research/diabetes-process-v2-cuffing-lock.jpg", text: "V2 cuffing and locking mechanism" },
      { heading: "Electrochemical testing",
        text: "The fabricated devices were characterized with EIS and with CV in PBS." },
      { image: "images/research/diabetes-results-eis.png", text: "EIS results" },
      { image: "images/research/diabetes-results-cv-pbs.png", text: "CV results in PBS" },
      { heading: "In vivo",
        text: "The final design was tested in an initial in vivo mouse implantation, a step further than most of my other bioelectronics work, which stopped at bench characterization." },
      { image: "images/research/diabetes-process-mouse-implant-schematic.png", text: "Mouse implantation schematic" },
      { image: "images/research/diabetes-final-mouse-implant-v3.jpg", text: "Mouse implantation with V3 prototype" },
      { heading: "Presenting the work",
        text: "Presented the project at SDSU's Re:Border conference in October 2024, making the cost and accessibility case for both the U.S. and Mexico. A second team later took the project further, and I presented the work alongside them, walking through our fabrication results." },
      { image: "images/research/diabetes-process-reborder-conference.jpg", wide: true,
        text: "Presenting the fabrication process at the SDSU Re:Border conference, October 2024" },
      { image: "images/research/diabetes-process-presenting-second-team.jpg", wide: true,
        text: "Presenting the fabrication results with the second team who took on the project" }
    ],
    tags: ["MEMS Fabrication", "Vagus Nerve Stimulation", "EIS / CV Characterization", "In Vivo Testing"],
    description: `
      <p>Diabetes affects roughly 537 million adults worldwide, and current
      management (lifestyle changes, glucose monitoring, insulin therapy)
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
      tested in an initial in vivo mouse implantation, a step further than
      most of my other bioelectronics work, which stopped at bench
      characterization.</p>
      <p>Presented this work with several different collaborator teams,
      including at the SDSU Spring Research Symposium (where it won an
      undergraduate research excellence award) and SDSU's Re:Border conference
      (October 2024), framing the cost and accessibility case for both
      countries.</p>
    `,
    links: []
  },
  {
    id: "slm-density-research",
    category: "research",
    subjects: ["fabrication", "research"],
    title: "Effect of SLM Process Parameters on 316L Stainless Steel Density",
    tagline: "WE-BELIEVE Research Program · first research project",
    thumb: "images/engineering/slm-final-printed-cubes.jpg",
    dates: "June 2021 – August 2021",
    finalImages: [
      "images/engineering/slm-final-printed-cubes.jpg",
      "images/engineering/slm-final-sample-closeup.jpg",
      "images/engineering/slm-final-sample-comparison.jpg",
      "images/engineering/slm-final-pore-analysis.jpg"
    ],
    // slm-process-density-setup.jpg is a duplicate of the means plot, so it's
    // left out until the real setup photo replaces it.
    process: [
      { heading: "Designing the experiment",
        text: "Instead of printing every combination, a Taguchi L25 orthogonal array covered 3 factors (scan speed, layer thickness, spot size) at 5 levels each in just 25 print runs." },
      { image: "images/engineering/slm-process-taguchi-array.jpg", text: "The L25 orthogonal array: 25 runs covering every factor level" },
      { heading: "Preparing the samples",
        text: "Prepped each of the 25 samples by grinding and polishing on a Struers grinder, then chemically etched them to reveal the microstructure before imaging under an optical/SEM microscope. Measured porosity from those micrographs in ImageJ (thresholding and particle analysis to isolate pores), then cross-checked against the Archimedes density measurements." },
      { images: ["images/engineering/slm-process-grinder.jpg", "images/engineering/slm-process-team-polishing.jpg"],
        text: "Grinding and polishing the samples" },
      { image: "images/engineering/slm-process-sample-prep.jpg", text: "Chemically etching a sample to reveal its microstructure" },
      { heading: "Analyzing the results",
        text: "Analyzed the DoE results with main-effects plots for means and for signal-to-noise ratios, which identified scan speed as the most influential factor on density, with layer thickness and spot size playing smaller roles." },
      { images: ["images/engineering/slm-process-means-plot.jpg", "images/engineering/slm-process-sn-plot.jpg"],
        text: "Main effects for means and signal-to-noise ratios. Scan speed has the steepest slope", wide: true },
      { image: "images/engineering/slm-process-lv-density-plot.jpg", wide: true,
        text: "Energy density (L/V) vs. relative density. Above a threshold, density plateaus near its maximum" }
    ],
    tags: ["Design of Experiments (DoE)", "Selective Laser Melting", "Materials Characterization", "Minitab"],
    description: `
      <p>My first research project: studying how selective laser melting
      (SLM) 3D printing parameters affect the final density of 316L
      stainless steel parts. Density drives mechanical strength, so
      predicting it from printer settings before printing is valuable for
      process planning. Working with Dionicio Riego under Dr. Torresani, I
      designed a Taguchi Design of Experiments (DoE), with 3 factors (scan
      speed, layer thickness, spot size) at 5 levels each (an L25(5³)
      orthogonal array), to map each parameter's effect on density in just
      25 print runs instead of testing every combination.</p>
      <p>Printed all 25 specimens on a Xact Metal laser printer (fixed laser
      power 120W, hatch spacing 50 microns), then measured density using
      Archimedes' principle (buoyant mass in a fluid) after polishing and
      chemically etching each sample. Measured relative densities ranging
      from about 82% up to 92.5%, and identified a clear threshold in energy
      density (the L/V ratio, laser power over scan velocity) above which
      density plateaued near its maximum, giving a practical target for
      future print settings.</p>
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
    dates: "September 2022 – December 2022",
    finalImages: [
      "images/research/prosthetic-final-cad-hinge.jpg",
      "images/research/prosthetic-final-printed-joint.jpg",
      "images/research/prosthetic-final-k2-render.jpg",
      "images/research/prosthetic-final-bracket.jpg"
    ],
    // Story-style case study: each heading/text section explains the photos
    // that follow it. Photos and captions are the ones Paulette picked from
    // her source decks; the sections reuse the project's own write-up.
    process: [
      { heading: "Inspiration and research",
        text: "Looked to biomimicry and the literature: the seahorse tail's square, segmented structure, and existing linkage systems." },
      { image: "images/research/prosthetic-process-seahorse-inspiration.png", text: "Seahorse inspired design" },
      { image: "images/research/prosthetic-process-literature-review.png", text: "Literature review for linkage system" },
      { heading: "Early concepts",
        text: "Iterated from early hand-drawn concepts through CAD modeling in SOLIDWORKS to a final printed and assembled prototype." },
      { images: [
          "images/research/prosthetic-process-initial-concept-1.jpg",
          "images/research/prosthetic-process-initial-concept-2.jpg",
          "images/research/prosthetic-process-initial-concept-3.jpg"
        ], text: "Initial design concepts" },
      { images: [
          "images/research/prosthetic-process-fabrication-idea-1.png",
          "images/research/prosthetic-process-fabrication-idea-2.png"
        ], text: "Fabrication/design ideas" },
      { images: [
          "images/research/prosthetic-process-movement-idea-1.png",
          "images/research/prosthetic-process-movement-idea-2.jpg"
        ], text: "Movement understanding ideas" },
      { image: "images/research/prosthetic-process-gantt-chart.png", text: "Gantt chart" },
      { heading: "CAD design",
        text: "Modeled the linkage and its outer protection in SOLIDWORKS, then built up the inner and full assemblies." },
      { image: "images/research/prosthetic-process-linkage-concept.png", text: "Linkage concept" },
      { image: "images/research/prosthetic-process-linkage-dimensions.png", text: "Rough linkage dimensions" },
      { image: "images/research/prosthetic-process-outer-protection-assembly.png", text: "Outer protection assembly" },
      { images: [
          "images/research/prosthetic-process-outer-protection-part-1.png",
          "images/research/prosthetic-process-outer-protection-part-2.png"
        ], text: "Outer protection part" },
      { image: "images/research/prosthetic-process-inner-linkage-assembly.png", text: "Inner linkage assembly" },
      { image: "images/research/prosthetic-process-inner-base-linkage.png", text: "Inner base linkage part" },
      { image: "images/research/prosthetic-process-foot-screw-hole.png", text: "Foot with screw hole for assembly" },
      { images: [
          "images/research/prosthetic-process-inner-assembly-1.png",
          "images/research/prosthetic-process-inner-assembly-2.png",
          "images/research/prosthetic-process-inner-assembly-3.png"
        ], text: "Inner assembly" },
      { images: [
          "images/research/prosthetic-process-full-assembly-1.png",
          "images/research/prosthetic-process-full-assembly-2.png"
        ], text: "Full assembly" },
      { heading: "Printing and tolerancing",
        text: "The first print run's connecting rod was toleranced -0.2 in from baseline and fit too loosely; a tighter -0.1 in reprint didn't fit at all, so we landed on -0.15 in as the corrected tolerance for a secure fit, along with follow-up fixes to how the hinge attachment holes and spring-retention features were positioned." },
      { image: "images/research/prosthetic-process-formlabs-printer.png", text: "Formlabs resin printer" },
      { image: "images/research/prosthetic-process-printed-prototype-1.jpg", text: "3D printed prototype" },
      { image: "images/research/prosthetic-process-printed-prototype-2.jpg", text: "3D printed prototype (link)" },
      { heading: "A later phase: K2 analysis",
        text: "A later phase of this work, run with a different team under the framing of Medicare's K2 ambulation classification, took a more traditional engineering-analysis approach: three hinge-and-foam heel designs were modeled and evaluated with FEA in SOLIDWORKS across the stance and toe-off phases of gait. The first design showed stress concentrations at the heel exceeding the material's yield strength; adding a hinge and an EVA foam insert (Design Two), then a second heel hinge to improve load transfer (Design Three), progressively smoothed out those stress concentrations and reduced peak strain." }
    ],
    tags: ["3D Printing", "Biomimicry", "SOLIDWORKS", "FEA"],
    description: `
      <p>LIMBER Prosthetics, a 3D-printing startup out of UCSD, prints
      below-the-knee prosthetics from a 3D scan of the residual limb at
      under a tenth of the cost of traditional devices (which can run up to
      $20,000). But like most affordable printed prosthetics, its designs
      have no ankle movement, which makes stairs, hills, and uneven ground
      difficult. My team set out to add articulation back in without adding
      cost, electronics, or hydraulics.</p>
      <p>We looked to biomimicry for the answer: a seahorse's tail is square
      in cross-section rather than cylindrical, which is why it can bend and
      grip while resisting crushing and torsion. A square prototype in the
      reference literature returned to its original shape after deformation,
      while a cylindrical one stayed bent. We adapted that segmented,
      square-prism plate structure (connected via the seahorse tail's own
      mix of gliding, peg-and-socket, and ball-and-socket joints) into a
      3D-printed hinge linking the printed leg to the foot, giving passive
      ankle articulation with no added hardware.</p>
    `,
    links: []
  },

  // ---------------- EXPERIENCE ----------------
  {
    id: "lab-manager",
    category: "experience",
    title: "Lab Manager & Mask Layout Lead",
    tagline: "SDSU Research Foundation, NanoFAB.SDSU",
    thumb: "images/experience/lab-manager-final-wafer-macro.jpg",
    dates: "May 2023 – July 2026",
    teamPhoto: "images/experience/lab-manager-final-team-group.jpg",
    finalImages: [
      "images/experience/lab-manager-final-cleanroom-selfie.jpg",
      "images/experience/lab-manager-final-wafer-macro.jpg",
      "images/experience/lab-manager-final-lab-tour.jpg",
      "images/experience/lab-manager-final-team-group.jpg"
    ],
    process: [
      { heading: "Mask layouts, wafer by wafer",
        text: "For every mask order (several each semester), researchers' electrode, insulation, and metal layers were combined into four final layers on a shared 4-inch wafer, with each design fit to a quarter or half wafer." },
      { images: [
          "images/experience/lab-manager-process-wafer-batch.jpg",
          "images/experience/lab-manager-process-wafer-macro-1.jpg",
          "images/experience/lab-manager-process-wafer-macro-2.jpg",
          "images/experience/lab-manager-process-wafer-macro-3.jpg"
        ], text: "Physical masks, up close under the cleanroom's yellow light", wide: true },
      { heading: "Every mask order, laid out",
        text: "These are the full layouts I put together for each mask order from Summer 2023 to Spring 2026. Each circle is a 4-inch wafer, with quarter- and half-wafer designs from different researchers combined onto it." },
      { images: [
          "images/experience/lab-manager-process-mask-layout-summer-2023.png",
          "images/experience/lab-manager-process-mask-layout-spring-2024.png",
          "images/experience/lab-manager-process-mask-layout-summer-2024.png",
          "images/experience/lab-manager-process-mask-layout-spring-2025-order-1a.png",
          "images/experience/lab-manager-process-mask-layout-spring-2025-order-1b.png",
          "images/experience/lab-manager-process-mask-layout-spring-2025-order-2.png",
          "images/experience/lab-manager-process-mask-layout-summer-2025.png",
          "images/experience/lab-manager-process-mask-layout-fall-2025.png",
          "images/experience/lab-manager-process-mask-layout-spring-2026.png"
        ], columns: 3, wide: true,
        text: "Full mask layouts for every order, Summer 2023 through Spring 2026" },
      { heading: "Training new researchers",
        text: "Each semester brought new trainees. Every student from the ME 499 and ME 685 courses was new to the lab, along with a good number of new bachelor's students, and each had their own schedule and certification goal. Levels ranged from Level 1 safety training to Level 2 tools like the Hirox 3D microscope and single-layer lithography, up to Level 3+ specialties like electrochemistry and microfluidics. Alongside them, I also tracked NanoFAB's master's and PhD researchers, a partner lab, and visiting scientists." },
      { heading: "Scheduling and tracking it all",
        text: "Co-managed training with two other lab managers using a shadow, practice, then exam pipeline: new researchers shadowed a fabrication process twice, practiced it twice with support, then passed both a hands-on practical and a written exam before working independently. To fit everyone in, I used a When2meet to find the days and times that worked for the most people and scheduled trainings around them, then tracked every trainee's progress step by step in a shared spreadsheet." },
      { image: "images/experience/lab-manager-process-training-tracker-1.jpg", wide: true,
        text: "Training tracker for one semester (names blurred): each row is a trainee, moving left to right from safety basics through shadowing, practice, and the final exam" },
      { image: "images/experience/lab-manager-process-training-tracker-2.jpg", wide: true,
        text: "Another semester's tracker, with ME 499 and ME 685 students joining NanoFAB's own researchers" },
      { heading: "Design meetings and research culture",
        text: "Ran weekly design meetings supporting multiple concurrent researcher projects per semester, helping each team scope a starting layout, feature sizes, and wafer constraints. Also presented my own research at the SDSU Student Research Symposium (S3), part of the broader NanoFAB research culture this role supported." },
      { heading: "Getting the lab ready for the symposiums",
        text: "Helped members find their research groups and prepare for two symposiums each year: the Graduate Research Symposium (GRS) in the fall, presented as posters, and SDSU's Student Research Symposium (S3) in the spring, presented as 10 minute talks. I created the presentations that walked the lab through what each symposium involved, from abstract requirements to registration deadlines, and placed students into research teams at our meetings, pairing undergraduates with graduate leads." },
      { images: ["images/experience/lab-manager-process-symposium-grs-info.jpg", "images/experience/lab-manager-process-symposium-s3-info.jpg"],
        text: "Slides I made for the lab covering GRS and S3", wide: true },
      { images: ["images/experience/lab-manager-process-symposium-group-topics-1.jpg", "images/experience/lab-manager-process-symposium-group-topics-2.jpg"],
        text: "The research teams students were placed into, from microfluidics and energy storage to a BioFET and cochlear implants", wide: true },
      { image: "images/experience/lab-manager-process-symposium.jpg", text: "2025 Engineering Graduate Research Symposium" },
      { image: "images/experience/lab-manager-process-mrs-conference.jpg", text: "At the Materials Research Society (MRS) conference" },
      { image: "images/research/epilepsy-process-cmems-2025.jpg", text: "Presenting the initial BioAura concepts at the 2025 CMEMS conference" },
      { images: ["images/experience/lab-manager-process-reception.jpg", "images/experience/lab-manager-process-team-dinner.jpg"],
        text: "At the 2025 CMEMS conference in Miami, and a lab social back in 2021" }
    ],
    tags: ["Mask Layout", "MEMS Fabrication", "Cleanroom Processing", "Process Improvement", "SOPs"],
    description: `
      <p>Compiled researchers' individual device designs into complete,
      fabrication-ready mask layouts for every mask order, combining every
      project's electrode, insulation, and metal layers into four final
      layers on a shared 4-inch wafer (each design fit to a quarter or half
      wafer), then handing off GDS files to an external mask vendor for
      fabrication. Conducted design reviews throughout the process to
      reduce fabrication rework and accelerate project timelines.</p>
      <p>Wrote the lab's Standard Operating Procedure for the Layout Person
      role, covering CoventorWare training, layer naming and labeling
      conventions, file organization by semester and order number, and a
      layout verification checklist. This turned what had been tribal
      knowledge into documentation the next layout lead could actually
      follow.</p>
    `,
    links: []
  },
  {
    id: "firmware-intern",
    category: "experience",
    title: "Firmware Engineering Intern",
    tagline: "Automated Firmware Relay Validation · Universal Electronics",
    thumb: "images/experience/firmware-process-zwave-ctt-results.jpg",
    dates: "May 2025 – August 2025",
    problem: "A smart thermostat's safety mitigation tests had to be run by hand on two different PCB boards, and each board talks over a different RF protocol.",
    role: "Automated the full mitigation test suite for both boards: one through the Z-Wave Compliance Test Tool, the other with Python over Zigbee.",
    keyResults: [
      "20 safety test sequences fully automated",
      "Both boards report their own pass/fail results",
      "Saved an hour of manual testing per run"
    ],
    finalImages: ["images/experience/firmware-process-zwave-ctt-results.jpg"],
    process: [
      { heading: "What the tests check",
        text: "The thermostat's firmware has several safety features for when something goes wrong, some of them staged across multiple steps. Every one of those had to be verified on two different PCB boards." },
      { heading: "Two boards, two protocols",
        text: "The two boards communicate over different RF signals, Z-Wave and Zigbee, so each one needed its own automation. I built the Z-Wave version in the Z-Wave Compliance Test Tool (CTT), where each test step is sent, checked, and logged as a pass, and the Zigbee version in Python." },
      { image: "images/experience/firmware-process-python-test-log.jpg", wide: true,
        text: "The Python version stepping through a test: sending commands, waiting for reports, and counting the relay notifications that come back before reporting a pass" },
      { heading: "The result",
        text: "Both versions run fully automated and report their own results, making the tests repeatable across both hardware platforms and saving an hour of manual testing per run." }
    ],
    tags: ["Python", "Z-Wave CTT", "Zigbee", "Test Automation", "Embedded Firmware"],
    description: `
      <p>Automated the firmware mitigation tests for a smart thermostat's
      safety features across two different PCB boards. Because the boards use different RF
      protocols, I automated one through the Z-Wave Compliance Test Tool and
      the other with Python over Zigbee.</p>
      <p>Both run fully automated and report their own results, covering 20
      safety test sequences, improving repeatability across hardware
      platforms, and cutting manual testing time by an hour per run.</p>
    `,
    links: []
  },
  {
    id: "hardware-intern",
    category: "experience",
    title: "Hardware Engineering Intern",
    tagline: "Automated Hardware Validation & Thermal Study · Universal Electronics",
    thumb: "images/experience/hardware-final-test-platform.jpg",
    dates: "May 2024 – August 2024",
    problem: "Thermostats have to recover on their own from blackouts, brownouts, and voltage swings, and the hardware team needed a way to test that reliably over the long term.",
    role: "Designed and built the test platform, wrote and verified its control scripts, and documented the new power-supply software in an SOP. Also installed humidity control for the test chamber.",
    keyResults: [
      "Power wall still in use at the site today",
      "One set of scripts works across thermostat voltage ratings",
      "SOP lets the team run tests on their own"
    ],
    finalImages: ["images/experience/hardware-final-test-platform.jpg"],
    process: [
      { heading: "Why reboot reliability matters",
        text: "Thermostats have to come back on by themselves after blackouts, brownouts, and other voltage changes. The hardware team needed long-term reboot reliability data on their devices, so I designed and built a test platform, the power wall, to run those tests automatically." },
      { image: "images/experience/hardware-process-relay-board.jpg", text: "Routing each thermostat's wire connectors back to the power supply" },
      { images: ["images/experience/hardware-process-electrical-box-vent.jpg", "images/experience/hardware-process-wire-connectors.jpg"],
        text: "Outlet box and wire connectors routing power across the wall" },
      { heading: "Writing the test scripts",
        text: "Each control script sets a voltage for a set amount of time. I wrote a full suite: brownout tests at 24V and 30V; a random on/off voltage variation test; on/off tests that cycle 1 s off and 0.1 s on, or 15 s on and 0.05 s off, while stepping up the voltage; and input voltage variation tests using sine and square waves on 12 s ramps, plus one that combines both." },
      { heading: "Making it reusable",
        text: "No one had used the new power-supply software before, so I worked out its limits, like a 100-step maximum per script and how to connect to different power supplies to run different tests at the same time. I built every script around a nominal voltage: the team enters the highest voltage a thermostat can take, and each step is a percentage of it, so one script works for thermostats with different voltage ratings. I used an oscilloscope to verify that the supply delivered the right voltages with the right timing, and that the nominal scaling held at any voltage." },
      { images: ["images/experience/hardware-process-digital-counter.jpg", "images/experience/hardware-process-pcb-closeup.jpg"],
        text: "A live voltage display at the top of the wall, so anyone can follow reboot behavior just by looking at it" },
      { heading: "Handing it off",
        text: "By the end of the project, the team could run scripts on the new power supply on their own, using an SOP I wrote for the new software. The power wall is still in use at the site today." },
      { heading: "Thermal chamber study",
        text: "To calibrate the team's temperature sensors, we needed to know each one's offset inside the chamber, but the sensors read too far apart from each other to calibrate accurately. I tracked the thermistors with a DataQ data acquisition system to check for uneven heating inside the chamber." },
      { image: "images/experience/hardware-process-thermal-chamber.jpg", text: "The thermal chamber" },
      { image: "images/experience/hardware-process-notebook-sketch.jpg", text: "Planning sensor placement inside the chamber" },
      { image: "images/experience/hardware-process-matlab-thermocouple-plot.jpg", text: "Sensor locations inside the chamber, plotted in MATLAB" },
      { heading: "What I recommended",
        text: "Applying thermodynamics principles, I experimented with building enclosures to hold the thermostats and give them a more controlled environment inside the chamber, aiming to bring the readings closer together. But a longer soak time was the only change that made a reliable difference. I recommended the soak-time adjustment and left it to the managers to weigh whether the extra time and resources were worth it. Along the way, the team got a much clearer picture of how their tools behave." },
      { heading: "Adding humidity control to the chamber",
        text: "In a separate project, I set up humidity control for the chamber in house, since having someone else install it would have cost more. I installed the relays and did the wiring, plumbed in a filter, water container, and tubing, and contacted the manufacturer directly with questions that came up during installation." },
      { image: "images/experience/hardware-process-control-panel.jpg", text: "Relays and wiring I installed in the chamber's control panel" }
    ],
    tags: ["Hardware Testing", "Power Supply Scripting", "Oscilloscopes", "DAQ", "MATLAB", "DOE"],
    description: `
      <p>Designed and built an automated hardware validation platform, the
      power wall, to test thermostat reboot reliability through blackouts,
      brownouts, and fluctuating voltage, using programmable power-supply
      scripts verified on an oscilloscope. It's still in use at the site
      today.</p>
      <p>Also ran a thermal distribution study (thermistors, DataQ, MATLAB)
      that found uneven heating inside the test chamber and recommended a
      longer soak time (DOE), and installed humidity control for the
      chamber: relays, wiring, filter, water container, and tubing.</p>
    `,
    links: []
  },
  {
    id: "robotics-instructor",
    category: "experience",
    title: "Robotics Instructor",
    tagline: "Smart Mind Robotics, La Mesa, CA",
    thumb: "images/experience/robotics-final-spike-bot-poster.jpg",
    dates: "October 2020 – April 2023",
    finalImages: [
      "images/experience/robotics-final-obstacle-bot.mp4",
      "images/experience/robotics-final-spike-bot.mp4",
      "images/experience/robotics-final-wedo-car.jpg"
    ],
    process: [
      { image: "images/experience/robotics-process-motor-closeup.jpg", text: "Up close on a student's motorized build" },
      { heading: "Keeping thousands of pieces findable",
        text: "Also maintained the classroom's build-kit inventory: with thousands of loose Technic pieces across dozens of class kits, I set up a \"sort by color\" bin system so students could actually find the part they needed mid-build instead of losing lesson time digging through mixed bins." },
      { images: ["images/experience/robotics-process-bin-organization-1.jpg", "images/experience/robotics-process-bin-organization-2.jpg"],
        text: "The sort-by-color bins" }
    ],
    tags: ["Teaching", "STEM Education", "LEGO Robotics"],
    description: `
      <p>Taught robotics principles and programming to students in grades
      3-8, adapting lessons across a wide range of learning styles and
      levels using LEGO WeDo and Spike Prime kits. Students built and
      programmed their own motorized robots, from simple wheeled cars to
      more complex sensor-driven builds, and drove them through
      obstacle-course activities in class.</p>
    `,
    links: []
  },

  // ---------------- ENGINEERING ----------------
  {
    id: "rocket",
    category: "engineering",
    subjects: ["mechanics", "fabrication"],
    title: "High-Power Rocket Build & Launch: LOC IV",
    tagline: "LOC Precision IV airframe, AeroTech 29/54mm DMS motor",
    thumb: "images/engineering/rocket-final-solo-standing.jpg",
    dates: "June 2025 – August 2025",
    teamPhoto: "images/engineering/rocket-final-team-group.jpg",
    finalImages: [
      "images/engineering/rocket-final-launch.mp4",
      "images/engineering/rocket-final-solo-standing.jpg",
      "images/engineering/rocket-final-shoulder-carry.jpg"
    ],
    // Story-style case study: each heading/text section explains the photos
    // that follow it. Photos and captions are the ones Paulette picked from
    // her source decks; the sections reuse the project's own write-up.
    process: [
      { heading: "Building the rocket",
        text: "Assembly followed the standard high-power build sequence: epoxied the aft, mid, and forward centering rings onto the 38mm motor tube, decided on motor retention hardware before committing the aft centering ring in place, mounted rail buttons for the launch rail, and packed the parachute and shock cord for recovery." },
      { image: "images/engineering/rocket-process-group-prep.jpg", text: "Prepping the rocket before launch" },
      { image: "images/engineering/rocket-process-group-prep-back.jpg", text: "Getting the recovery gear ready" },
      { image: "images/engineering/rocket-process-gear-closeup.jpg", text: "Parachute and shock cord laid out" },
      { heading: "Launch day",
        text: "Motor prep followed AeroTech's DMS procedure at the pad: set the ejection delay with the drill tool, loaded the black-powder ejection charge, and installed the igniter immediately before flight per range safety procedure." },
      { image: "images/engineering/rocket-process-prep-video.mp4", text: "Final prep at the pad" },
      { image: "images/engineering/rocket-process-launch-stand.jpg", text: "On the launch rail, ready to fly" }
    ],
    tags: ["High-Power Rocketry", "AeroTech DMS Motor", "Recovery Systems"],
    description: `
      <p>Built and launched a high-power rocket: a LOC Precision "IV"
      airframe (23 in. slotted booster, 11 in. payload bay, 38mm motor
      mount, 3 fins, 36 in. parachute recovery on 15 ft of nylon shock cord)
      flown on an AeroTech 29/54mm DMS motor, a certified-flyer-class
      (H-impulse and above) composite reload motor with an adjustable
      ejection delay. Hand-painted the airframe with a full floral design
      rather than leaving it bare, then flew it at a desert high-power
      launch alongside other club rockets.</p>
    `,
    links: []
  },
  {
    id: "syringe-pump",
    category: "engineering",
    subjects: ["devices", "mechanics"],
    title: "Microcontroller-Driven Syringe Pump",
    tagline: "ME 683: Design of Medical Devices, SDSU",
    thumb: "images/engineering/syringe-final-full-setup.jpg",
    dates: "February 2026 – March 2026",
    finalImages: [
      "images/engineering/syringe-final-full-setup.jpg",
      "images/engineering/syringe-final-electronics-box.jpg",
      "images/engineering/syringe-final-control-panel.jpg"
    ],
    process: [
      { heading: "Holding the syringe still",
        text: "Started from a basic force-balance analysis of how a syringe is used manually (F_plunger ≈ ΔP·A_syringe + F_friction): the holder has to react the plunger force and keep the syringe body stationary." },
      { image: "images/engineering/syringe-process-force-diagram.jpg", text: "Force balance on the syringe" },
      { images: ["images/engineering/syringe-process-cad-base.jpg", "images/engineering/syringe-process-cad-holder.jpg"],
        text: "Slotted syringe holder, modeled in OnShape and 3D printed in PLA" },
      { image: "images/engineering/syringe-process-cad-rail.jpg", text: "Pump layout: the motor and lead screw drive the plunger" },
      { heading: "Sizing the motor",
        text: "Sized the motor and lead screw against a Poiseuille pressure-drop estimate for the restricted outlet, which set the governing case: a max torque of 1.21×10⁻² N·m and max pressure of about 54.6 kPa (≈3.06 N on the plunger), comfortably within the provided motor's capability." },
      { image: "images/engineering/syringe-process-wiring.jpg", text: "Wiring the Arduino, motor shield, and flow-rate buttons" },
      { heading: "Calibrating against real measurements",
        text: "Calibrated motor motion empirically rather than trusting the theoretical steps/mL figure: measured actual dispensed volume over timed runs to arrive at 0.522 mL/rev (open) and 0.422 mL/rev (restricted), then used those measured constants (not the calculated ones) in the Arduino code driving each flow-rate button." },
      { image: "images/engineering/syringe-process-code.jpg", text: "Arduino code using the measured calibration constants" },
      { heading: "What we'd change next time",
        text: "Hit real hardware problems along the way: mechanical alignment issues caused overshoot on step changes, and the motor ran hot enough under sustained restricted-flow operation to warrant adding an emergency-stop command. Identified tight tolerances in the 3D printed holder as the likely root cause of the alignment issue. The fix we'd make next time is a spring-loaded holder that applies gentle pressure from above to keep the syringe seated, plus a small display for flow-rate feedback instead of button-only control." }
    ],
    tags: ["Arduino", "Mechatronics", "OnShape / CAD", "DFM", "Validation Testing"],
    description: `
      <p>Designed, built, and validated a 60 mL luer-lock syringe pump, a
      motorized medical device that dispenses fluid at a precise,
      steady-state rate, with software-selectable flow rates from 2 to 20
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
    links: []
  },

  // ---------------- LEADERSHIP ----------------
  {
    id: "bmes",
    category: "leadership",
    title: "Vice President",
    tagline: "Biomedical Engineering Society (BMES), SDSU",
    thumb: "images/leadership/bmes-final-masimo-group.jpg",
    dates: "June 2024 – May 2026",
    finalImages: [
      "images/leadership/bmes-final-masimo-group.jpg",
      "images/leadership/bmes-final-tabling-indoor.jpg",
      "images/leadership/bmes-final-industry-night.jpg",
      "images/leadership/bmes-final-tabling-outdoor.jpg"
    ],
    process: [
      { heading: "Planning a year of professional development",
        text: "Mapped the year's programming into four tracks: professional advice, workshops, facility tours, and hands-on experience." },
      { image: "images/leadership/bmes-process-planning-diagram.jpg", text: "The professional development plan", wide: true },
      // From the club's 25/26 working schedule (officer meetings left out).
      // type drives the label; "Speaker" and "Tour" get the red accent.
      { heading: "2025–26 at a glance",
        text: "Every general body meeting, speaker, tour, and social from the year's working schedule.",
        schedule: [
          { term: "Fall 2025", events: [
            { date: "Aug 26", type: "Tabling", title: "Fall tabling" },
            { date: "Sep 8", type: "GBM", title: "Welcome GBM" },
            { date: "Sep 22", type: "Workshop", title: "LinkedIn & career-building workshop" },
            { date: "Sep 26", type: "Social", title: "Fundraiser at Dave & Buster's" },
            { date: "Oct 6", type: "Speaker", title: "Tara Welbourne, BD" },
            { date: "Oct 20", type: "GBM", title: "Halloween GBM + lab tour" },
            { date: "Nov 3", type: "Speaker", title: "Guest speaker" },
            { date: "Nov 17", type: "GBM", title: "Holiday GBM, SRS prep + lab tour" },
            { date: "Dec 5", type: "Tour", title: "Masimo facility tour, Irvine" }
          ] },
          { term: "Spring 2026", events: [
            { date: "Jan 27", type: "Tabling", title: "RSO Expo" },
            { date: "Feb 2", type: "Workshop", title: "Digital Portfolio Workshop" },
            { date: "Feb 3", type: "Speaker", title: "Medical device design series: FDA guidance" },
            { date: "Feb 13", type: "Social", title: "Fundraiser & social at Dave & Buster's" },
            { date: "Feb 16", type: "Speaker", title: "Kelli Knichel, 3D printing at Rady Children's" },
            { date: "Feb 19", type: "Speaker", title: "Medical device design series: Orthofix" },
            { date: "Feb 23", type: "Tour", title: "Rady Children's Motion Analysis Lab" },
            { date: "Feb 25", type: "Social", title: "Game-day fundraiser at Epic Wings" },
            { date: "Feb 26", type: "Speaker", title: "Medical device design series: Illumina" },
            { date: "Feb 27", type: "Research", title: "Members present at the Student Research Symposium" },
            { date: "Mar 2", type: "Workshop", title: "Mock interviews with Career Services" },
            { date: "Mar 16", type: "Speaker", title: "Joseph Marrocco" },
            { date: "Apr 6", type: "GBM", title: "Officer elections + Morsi Lab" },
            { date: "Apr 20", type: "Speaker", title: "Gisselle Ho" },
            { date: "May 4", type: "GBM", title: "Last GBM of the year" }
          ] }
        ] },
      { images: ["images/leadership/bmes-process-panel-1.jpg", "images/leadership/bmes-process-panel-2.jpg"],
        text: "Industry Night professional panel" },
      { heading: "Industry and lab tours",
        text: "Arranged facility tours to Masimo's headquarters and Rady Children's Motion Analysis Lab, plus on-campus lab tours." },
      { images: ["images/leadership/bmes-process-masimo-lobby.jpg", "images/leadership/bmes-process-masimo-meeting.jpg"],
        text: "Touring Masimo's headquarters" },
      { images: ["images/leadership/bmes-process-robotics-tour-1.jpg", "images/leadership/bmes-process-robotics-tour-2.jpg"],
        text: "Psyonic tour" },
      { images: ["images/leadership/bmes-process-nanofab-cleanroom-tour.jpg", "images/leadership/bmes-process-motion-lab-tour.jpg"],
        text: "Suited up in the NanoFAB cleanroom, and a motion-capture demo at Rady Children's Motion Analysis Lab", wide: true },
      { heading: "Getting members into research",
        text: "A big goal for the year was helping members get involved in research, from touring on-campus labs to prepping for and presenting their own projects at SDSU's Student Research Symposium." },
      { images: [
          "images/leadership/bmes-process-member-research-1.jpg",
          "images/leadership/bmes-process-member-research-2.jpg",
          "images/leadership/bmes-process-member-research-3.jpg"
        ], text: "Members presenting their NanoFAB research at the Student Research Symposium (SRS)", wide: true },
      { heading: "Digital Portfolio Workshop",
        text: "Ran a Digital Portfolio Workshop for members, covering how a portfolio differs from a resume, what to include (process, tools, results, not just outcomes), and free website builders to get started with, to help members present their project work to employers and grad programs." },
      { image: "images/leadership/bmes-process-portfolio-workshop-slide-1.jpg", wide: true,
        text: "Why a portfolio, and what counts as a project" },
      { images: [
          "images/leadership/bmes-process-portfolio-workshop-slide-2.jpg",
          "images/leadership/bmes-process-portfolio-workshop-slide-3.jpg"
        ], text: "Free website builders, what to include, and a step-by-step plan to get started" },
      { heading: "Behind the scenes",
        text: "Put together the club's workshops and visited classes to spread the word about BMES. Made tours happen end to end: coordinating dates and logistics with each company, and building the interest forms and transportation sheets members used to sign up and get there. Kept it all organized with a running contact tracker for guest speakers and lab tours (confirmation status, company, role, LinkedIn) across a full semester of weekly programming." }
    ],
    tags: ["Event Planning", "Industry Outreach", "Professional Development"],
    description: `
      <p>Led professional development initiatives by planning weekly general
      body meetings, guest speakers, workshops, and industry/research lab
      tours. Founded the project subteam, achieved official BMES national
      chapter recognition for SDSU, and grew membership from 11 to 26.</p>
      <p>Organized an Industry Night professional panel and personally
      recruited several of its confirmed speakers, including engineers from
      Solar Turbines, ASML, and Qualcomm, alongside panelists from Masimo
      and BD. Arranged facility tours to Masimo's headquarters and Rady
      Children's Motion Analysis Lab, plus on-campus lab tours (NanoFAB,
      the Additive Manufacturing & Advanced Materials Lab, and a
      cardiovascular tissue biomechanics lab).</p>
    `,
    links: []
  },
  {
    id: "asme",
    category: "leadership",
    title: "President & Treasurer",
    tagline: "American Society of Mechanical Engineers (ASME), SDSU",
    thumb: "images/leadership/asme-final-gbm-group.jpg",
    dates: "June 2023 – May 2025",
    finalImages: [
      "images/leadership/asme-final-gbm-group.jpg",
      "images/leadership/asme-final-tabling.jpg",
      "images/leadership/asme-final-info-session.jpg"
    ],
    process: [
      { heading: "A full year of programming",
        text: "Kept members in the loop with monthly calendars and event flyers for general body meetings, design-team meetings, and industry tours." },
      // Fall from the officers' task-list schedule, spring from the monthly
      // calendars and GBM flyers. Officer meetings and the weekly spring
      // design-team meetings are left out to keep it scannable.
      { heading: "2024–25 at a glance",
        text: "Every general body meeting, speaker, tour, and social across the year, plus weekly design-team meetings all spring.",
        schedule: [
          { term: "Fall 2024", events: [
            { date: "Aug 31", type: "Social", title: "Balloon animal social" },
            { date: "Sep 3", type: "Tabling", title: "ECOF Engineering Fair" },
            { date: "Sep 5", type: "GBM", title: "Info session" },
            { date: "Sep 9", type: "Social", title: "Trivia night" },
            { date: "Sep 10", type: "Speaker", title: "UMEC" },
            { date: "Sep 24", type: "Speaker", title: "Fernando Martinez, ASME San Diego & General Atomics" },
            { date: "Sep 24", type: "Tour", title: "Cardiovascular Bioengineering Lab" },
            { date: "Sep 26", type: "Social", title: "Cross-club engineering bonfire, Mission Beach" },
            { date: "Oct 3", type: "Tour", title: "Solar Turbines" },
            { date: "Oct 8", type: "Workshop", title: "Resume workshop with UMEC" },
            { date: "Oct 16", type: "Tour", title: "Dexcom" },
            { date: "Oct 22", type: "Speaker", title: "Greg Trujillo, APEM" },
            { date: "Nov 5", type: "Speaker", title: "Evan Keuster, 3D Systems" },
            { date: "Nov 5", type: "Tour", title: "Dr. Youssef's lab" },
            { date: "Nov 13", type: "Tour", title: "UC San Diego lab tours" },
            { date: "Nov 19", type: "Speaker", title: "James Powell, Navy, Solar Turbines & SDSU" },
            { date: "Dec 3", type: "Speaker", title: "Phillip Benham, Raytheon" }
          ] },
          { term: "Spring 2025", events: [
            { date: "Jan 28", type: "GBM", title: "Welcome back: Kahoot + pizza" },
            { date: "Feb 4", type: "Speaker", title: "Rodolpho Pereira, Hi-Tech Honeycomb" },
            { date: "Feb 13", type: "Social", title: "Valentine's Day social" },
            { date: "Feb 15", type: "Service", title: "Beach clean-up, Imperial Beach" },
            { date: "Feb 18", type: "Service", title: "Volunteering workshop" },
            { date: "Mar 4", type: "Speaker", title: "Armando Chavez, General Atomics" },
            { date: "Mar 11", type: "Social", title: "ASME x SWE jewelry workshop" },
            { date: "Mar 18", type: "Speaker", title: "Coffee with Industry: small-group chats with guests from many fields" },
            { date: "Mar 21", type: "Social", title: "ASME x SHPE bowling night" },
            { date: "Apr 15", type: "Speaker", title: "Industry panel from Southland Industries" },
            { date: "Apr 29", type: "GBM", title: "Final GBM + T-shirt reveal" }
          ] }
        ] },
      { images: ["images/leadership/asme-process-february-calendar.jpg", "images/leadership/asme-process-march-calendar.jpg"],
        text: "The monthly calendars sent to members", wide: true },
      { heading: "Industry tours and speakers",
        text: "Organized site tours to Solar Turbines, Dexcom, and UC San Diego labs, and brought engineers from companies like General Atomics, Raytheon, and 3D Systems into general body meetings. For Coffee with Industry, guests from many different fields came in to talk with students in small groups, and ASME co-hosted an Industry Night with BMES and IEEE." },
      { images: [
          "images/leadership/asme-process-solar-turbines-tour-flyer.jpg",
          "images/leadership/asme-process-dexcom-tour-flyer.jpg",
          "images/leadership/asme-process-ucsd-lab-tours-flyer.jpg",
          "images/leadership/asme-process-youseff-lab-tour-flyer.jpg"
        ], text: "Tour flyers", wide: true },
      { images: ["images/leadership/asme-process-cleanroom-tour.jpg", "images/leadership/asme-process-lab-tour-demo.jpg"],
        text: "On lab tours: suited up for the cleanroom, and a hands-on equipment demo" },
      { images: ["images/leadership/asme-process-lab-tour-group.jpg", "images/leadership/asme-process-lab-tour-talk.jpg"],
        text: "Members outside the cleanroom, and a walkthrough of a research lab" },
      { images: [
          "images/leadership/asme-process-hi-tech-honeycomb-gbm-flyer.jpg",
          "images/leadership/asme-process-general-atomics-gbm-flyer.jpg",
          "images/leadership/asme-process-coffee-with-industry-flyer.jpg",
          "images/leadership/asme-process-southland-panel-flyer.jpg"
        ], text: "Speaker flyers: Hi-Tech Honeycomb, General Atomics, Coffee with Industry, and a Southland Industries panel", wide: true },
      { images: ["images/leadership/asme-process-southland-panel.jpg", "images/leadership/asme-process-industry-night.jpg"],
        text: "The Southland Industries panel, and the BMES x ASME x IEEE Industry Night", wide: true },
      { heading: "Design team",
        text: "Alongside general meetings, the design team met every week so members could get hands-on building real hardware." },
      { images: ["images/leadership/asme-process-design-team-build.jpg", "images/leadership/asme-process-design-team-drone.jpg"],
        text: "Design team build sessions" },
      { heading: "Community and socials",
        text: "Also ran a blanket-making community service event and a beach clean-up, tabled at SDSU's Explore SDSU Open House to recruit new members, and hosted cross-club socials." },
      { images: ["images/leadership/asme-process-tabling-1.jpg", "images/leadership/asme-process-tabling-2.jpg"],
        text: "Tabling to recruit new members" },
      { images: ["images/leadership/asme-process-blanket-1.jpg", "images/leadership/asme-process-blanket-2.jpg"],
        text: "Blanket-making community service event" },
      { image: "images/leadership/asme-process-speed-dating-social.jpg", text: "A speed-dating style social" },
      { images: [
          "images/leadership/asme-process-welcome-back-gbm-flyer.jpg",
          "images/leadership/asme-process-trivia-night-flyer.jpg",
          "images/leadership/asme-process-bowling-flyer.jpg",
          "images/leadership/asme-process-final-gbm-flyer.jpg"
        ], text: "Welcome back, trivia night, ASME x SHPE bowling, and the final GBM", wide: true },
      { heading: "Behind the scenes",
        text: "Ran the business side of the club. Helped put together grant applications, including the funding proposal that secured a $17,000 grant, and managed budgeting and reimbursements as treasurer. Filed the paperwork to get ASME recognized with the university, held and facilitated officer meetings to plan the semester, and created the slides for our general body meetings." },
      { image: "images/leadership/asme-process-leading-gbm.jpg", wide: true, text: "Leading a general body meeting as president" }
    ],
    tags: ["Event Planning", "Budget Management", "Community Outreach"],
    description: `
      <p>Led meetings and grew paid membership by 165% through active
      outreach and value-driven programming. As treasurer, secured a
      $17,000 grant through a funding proposal and managed budgeting and
      reimbursements.</p>
      <p>Organized a full year of weekly general body and design-team
      meetings, alongside industry site tours (Solar Turbines, Dexcom, UC
      San Diego labs) and cross-club social events: an ASME x SHPE bowling
      night, an ASME x SWE jewelry workshop, a bonfire, and trivia night.</p>
    `,
    links: []
  }
];
