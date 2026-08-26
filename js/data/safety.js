/* First aid entries describe what accredited courses teach, so you know what
   the skill involves and can practise the non-clinical parts. They are not a
   substitute for hands-on certified training, and every entry says so. */
window.SKILLS = (window.SKILLS || []).concat([
{
  id:'cpr', cat:'safety', name:'Learn CPR', time:'A half-day course', level:'Moderate',
  blurb:'The single highest-value skill on this entire list. Survival from a cardiac arrest roughly doubles or trebles when a bystander starts CPR, and most people who could help stand and watch because they were never taught.',
  gear:['A place on an accredited first aid course — this one genuinely requires hands-on practice','A manikin, which the course provides'],
  steps:[
    'Book a course. Reading about chest compressions does not build the skill; pressing on a manikin under instruction does.',
    'Learn the sequence: check danger, check response, shout for help, open the airway, check breathing for no more than ten seconds.',
    'Learn to recognise agonal breathing — occasional gasping — as cardiac arrest, not as breathing. This is the mistake that costs lives.',
    'Call emergency services, or send a specific named person, and ask for an AED.',
    'Learn compressions: centre of the chest, 5–6 cm deep on an adult, 100–120 per minute, letting the chest recoil fully between each.',
    'Learn that hands-only CPR is entirely acceptable if you are untrained in rescue breaths or unwilling to give them, and practise on the manikin until the depth and rate are automatic.'
  ],
  tips:[
    'Compressions on adults are deeper and harder than people expect. Ribs sometimes crack; you continue anyway.',
    'Child and infant CPR differ. If you are around children, take a course that covers them specifically.',
    'Refresh it. CPR skills measurably decay within months, which is why certificates expire.'
  ],
  proof:'A current certificate from an accredited course, and you can demonstrate correct depth and rate on a manikin.'
},
{
  id:'use-aed', cat:'safety', name:'Use a defibrillator', time:'Part of a first aid course', level:'Easy',
  blurb:'An AED talks you through it out loud and will not shock someone who does not need it. The barrier is purely psychological — knowing that beforehand is most of the skill.',
  gear:['A first aid course covering AED use','Awareness of where the AEDs are near your home and work'],
  steps:[
    'Learn where your nearest public AEDs are, and that emergency services can tell you on the phone.',
    'Learn the principle: it analyses the heart rhythm and only delivers a shock if one is needed. You cannot hurt someone with it by mistake.',
    'Turn it on first and then follow the spoken instructions exactly — that is the whole operating procedure.',
    'Learn pad placement, and the practical points: dry the chest, shave heavy hair if a razor is included, remove medication patches.',
    'Learn to make sure nobody is touching the person when it says to stand clear.',
    'Resume compressions immediately after the shock, without waiting to see what happens.'
  ],
  tips:[
    'Never delay compressions to go looking for an AED alone. Send someone else.',
    'Do not use it in standing water, and dry the chest first.'
  ],
  proof:'You can locate your three nearest public AEDs and talk someone through using one.'
},
{
  id:'recovery-position', cat:'safety', name:'Put someone in the recovery position', time:'1 hour', level:'Easy',
  blurb:'For someone unconscious but breathing normally. It keeps the airway open and stops them choking on vomit — simple, quick, and it saves lives at every party and roadside.',
  gear:['A willing friend to practise on','Floor space'],
  steps:[
    'Confirm first that they are unconscious but breathing normally. If they are not breathing normally, it is CPR instead.',
    'Kneel beside them, place the near arm out at a right angle, palm up.',
    'Bring the far arm across the chest and hold the back of their hand against the near cheek.',
    'Pull the far knee up and use it as a lever to roll them towards you onto their side.',
    'Adjust the top leg so hip and knee are at right angles, and tilt the head back gently to keep the airway open.',
    'Call emergency services, monitor breathing continuously, and be ready to start CPR if it stops.'
  ],
  tips:[
    'If you suspect a spinal injury, still prioritise the airway — an open airway beats a perfectly still spine.',
    'Practise on a real person. It is much more awkward than diagrams suggest.'
  ],
  proof:'You can roll an adult into a stable recovery position in under thirty seconds, unprompted.'
},
{
  id:'choking', cat:'safety', name:'Help a choking person', time:'Part of a first aid course', level:'Moderate',
  blurb:'Back blows and abdominal thrusts, in that order — and knowing the difference between mild choking, where you leave them to cough, and severe, where you act immediately.',
  gear:['An accredited course, which will cover adult, child and infant technique'],
  steps:[
    'Assess severity: if they can cough forcefully, speak or breathe, encourage coughing and do not intervene.',
    'If the cough is silent, they cannot breathe or speak, or they are clutching their throat, act at once.',
    'Give up to five sharp back blows between the shoulder blades with the heel of your hand, leaning them forward.',
    'If that fails, give up to five abdominal thrusts — hands above the navel, sharply inwards and upwards.',
    'Alternate the two and call emergency services if it does not clear quickly.',
    'Learn the infant variation, which uses back blows and chest thrusts, never abdominal thrusts.'
  ],
  tips:[
    'Abdominal thrusts can cause internal injury. Anyone who has received them should be checked by a doctor.',
    'Pregnant or larger people get chest thrusts instead of abdominal thrusts.',
    'Do not do blind finger sweeps — you can push the obstruction deeper.'
  ],
  proof:'A course certificate, and you can state the escalation for adults, children and infants from memory.'
},
{
  id:'stop-bleeding', cat:'safety', name:'Control severe bleeding', time:'A short course', level:'Moderate',
  blurb:'Someone with a major bleed can die in minutes, long before an ambulance arrives. Direct pressure is the answer and almost everyone applies far too little of it.',
  gear:['A first aid course covering catastrophic bleeding','Gloves, dressings, and a tourniquet if you carry a kit'],
  steps:[
    'Protect yourself first — gloves if available — then apply firm direct pressure straight onto the wound.',
    'Press hard and keep pressing. Continuous, heavy, uninterrupted pressure is what stops bleeding, not a light dressing.',
    'Add dressings on top if blood soaks through; never remove the first one, since it takes the clot with it.',
    'Call emergency services immediately, and keep the person warm and lying down.',
    'For a catastrophic limb bleed that direct pressure will not control, learn tourniquet use on a course: high and tight, note the time, and never loosen it.',
    'Learn wound packing for junctional wounds if your course covers it.'
  ],
  tips:[
    'Improvised tourniquets often fail and can cause harm. Learn on a proper one.',
    'Once a tourniquet is on, it stays on until a clinician removes it. Write the time down.'
  ],
  proof:'A certificate covering catastrophic bleeding, and you can apply a tourniquet correctly under time pressure.'
},
{
  id:'treat-burns', cat:'safety', name:'Treat a burn correctly', time:'1–2 hours', level:'Easy',
  blurb:'Twenty minutes of cool running water changes the outcome of a burn more than anything else a bystander can do — and almost every folk remedy makes it worse.',
  gear:['Access to cool running water','Cling film','A first aid course for the assessment side'],
  steps:[
    'Stop the burning: remove the source, and remove clothing and jewellery near the area unless it is stuck to the skin.',
    'Cool under cool — not ice cold — running water for a full twenty minutes. This is far longer than people think and it genuinely reduces depth.',
    'Keep the rest of the person warm while you cool the burn, especially with children.',
    'Cover loosely with cling film laid lengthways, or a clean non-fluffy cloth. Do not wrap tightly.',
    'Never apply butter, oil, toothpaste or ice, and do not burst blisters.',
    'Learn when to go to hospital: burns to face, hands, feet or genitals, anything larger than the person’s palm, all chemical and electrical burns, and any burn on a child.'
  ],
  tips:[
    'Ice causes further tissue damage. Cool running water only.',
    'Chemical burns need much longer irrigation, and identify the chemical for the medics.'
  ],
  proof:'You can state the full sequence and the referral criteria without looking them up.'
},
{
  id:'recognise-stroke-heart', cat:'safety', name:'Recognise a stroke or heart attack', time:'1 hour', level:'Easy',
  blurb:'Both are time-critical: treatment options narrow by the hour. Recognising them and calling immediately is a skill anyone can learn in an evening.',
  gear:['Nothing but the willingness to learn the signs'],
  steps:[
    'Learn FAST for stroke: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services.',
    'Learn the less obvious stroke signs too: sudden vision loss, severe unexplained headache, sudden loss of balance or coordination.',
    'Learn heart attack signs: central chest pain or pressure, possibly radiating to arm, jaw or back, with sweating, nausea or breathlessness.',
    'Learn that presentation differs — women, older people and those with diabetes more often have atypical symptoms such as fatigue, breathlessness or back pain rather than crushing chest pain.',
    'Call emergency services immediately rather than driving them yourself or waiting to see if it passes.',
    'While waiting: keep them still and calm, sitting up for a suspected heart attack, and follow the dispatcher’s instructions about aspirin.'
  ],
  tips:[
    'Symptoms that come and go still need an emergency call — a mini-stroke often precedes a major one.',
    'Never let someone talk you out of calling. Embarrassment is a poor reason to lose brain tissue.'
  ],
  proof:'You can run through FAST and the atypical presentations from memory, and you would call without hesitating.'
},
{
  id:'sprains-strains', cat:'safety', name:'Treat sprains and strains', time:'1–2 hours', level:'Easy',
  blurb:'The old RICE advice has moved on. Current guidance protects the injury early and then loads it gently, because prolonged rest slows healing rather than helping.',
  gear:['An elastic bandage','A cold pack','A first aid reference from a current source'],
  steps:[
    'In the first day or two, protect the injury and avoid anything that sharply increases pain.',
    'Use elevation and gentle compression to manage swelling.',
    'Learn the current thinking on ice: useful for short-term pain relief, but prolonged icing may slow healing. Use it briefly for comfort.',
    'Begin gentle optimal loading early — movement within a pain-free range — rather than complete rest.',
    'Learn the red flags for a fracture: inability to bear weight, deformity, bony tenderness, numbness. Those need imaging.',
    'Progress load gradually and return to full activity only when strength and balance have come back.'
  ],
  tips:[
    'Complete rest for a week is now considered counterproductive for most simple sprains.',
    'Anti-inflammatories may relieve pain but there is debate about their effect on healing. Ask a clinician.'
  ],
  proof:'You manage a real sprain to full function, and can name the red flags that mean go to hospital.'
},
{
  id:'first-aid-kit', cat:'safety', name:'Build a first aid kit that gets used', time:'An afternoon', level:'Easy',
  blurb:'Shop-bought kits are mostly plasters. Building your own means you know what is in it, where it is, and how to use each item — which is the part that matters.',
  gear:['A sturdy visible container','Contents chosen for your actual life and location'],
  steps:[
    'Build around what you actually do: a household kit, a car kit and a walking kit have genuinely different contents.',
    'Cover the basics: assorted dressings, sterile gauze, tape, triangular bandage, gloves, scissors, tweezers, saline.',
    'Add what you would actually need: blister plasters for walkers, a foil blanket, a tick remover, burn gel for the kitchen.',
    'Add personal medication: antihistamines, any prescribed adrenaline auto-injectors, painkillers, and a written list of household medications and allergies.',
    'Check expiry dates twice a year and restock what you use.',
    'Make sure everyone in the house knows where it is — a kit nobody can find is decoration.'
  ],
  tips:[
    'Skip the tiny sachets and single plasters that fill commercial kits. Pack more of the few things you would actually reach for.',
    'A kit is only useful alongside training. Buying it is the easy half.'
  ],
  proof:'A kit you assembled, everyone in the household can find, and that you have restocked at least once.'
},
{
  id:'hypothermia-heat', cat:'safety', name:'Recognise and treat hypothermia and heat illness', time:'1–2 hours', level:'Moderate',
  blurb:'Two opposite emergencies with the same trap: the person affected is usually the last to notice. Anyone who spends time outdoors should know both.',
  gear:['A first aid reference','A foil blanket and insulation in your outdoor kit'],
  steps:[
    'Learn the early signs of hypothermia — the "umbles": stumbles, mumbles, fumbles, grumbles — plus shivering and poor decisions.',
    'Treat by stopping heat loss: shelter from wind and wet, remove wet clothing, insulate from the ground, add layers and a hat, and give warm sweet drinks if fully conscious.',
    'Handle severely hypothermic people gently and get medical help — rough handling can trigger dangerous heart rhythms, and do not rub limbs or give alcohol.',
    'Learn heat exhaustion: heavy sweating, weakness, nausea, headache. Move to shade, cool actively, and rehydrate.',
    'Learn heatstroke, which is a medical emergency: confusion, no sweating in some cases, very high temperature, collapse. Call emergency services and cool aggressively.',
    'Learn prevention for both: layering and fuel in cold, pacing, shade and salt in heat.'
  ],
  tips:[
    'Shivering stopping in a cold casualty is a bad sign, not a good one.',
    'Confusion in heat is the line between exhaustion and heatstroke. Treat confusion as an emergency.'
  ],
  proof:'You can identify both conditions early in someone else and act before they become serious.'
},
{
  id:'anaphylaxis', cat:'safety', name:'Recognise and respond to anaphylaxis', time:'1–2 hours', level:'Moderate',
  blurb:'A severe allergic reaction kills within minutes and adrenaline reverses it. If anyone in your life carries an auto-injector, you should know how to use it.',
  gear:['A trainer auto-injector, usually available free from the manufacturer','A first aid course'],
  steps:[
    'Learn the signs: swelling of face, lips or throat, difficulty breathing, wheeze, sudden widespread rash, collapse, sense of impending doom.',
    'Learn that skin symptoms may be absent — breathing or circulation problems after an exposure are enough.',
    'Use the auto-injector immediately into the outer thigh, through clothing if needed. Delay is the main cause of death.',
    'Call emergency services immediately after, every time, even if they improve.',
    'Lie them flat with legs raised, or sit them up if breathing is the main problem. Never stand them up suddenly.',
    'Be ready to give a second dose after five minutes if there is no improvement, and practise with a trainer device.'
  ],
  tips:[
    'Adrenaline given unnecessarily to a healthy person is very unlikely to cause harm. Withholding it is far riskier.',
    'Standing or walking someone in anaphylaxis can cause fatal collapse. Keep them down.'
  ],
  proof:'You can demonstrate the trainer device correctly and state the signs without prompting.'
},
{
  id:'mains-shutoffs', cat:'safety', name:'Shut off water, gas and electricity', time:'1 hour', level:'Easy',
  blurb:'The five minutes that prevent a flooded house. Almost nobody knows where their stopcock is until water is coming through the ceiling.',
  gear:['A torch','A stopcock key if yours needs one','Labels'],
  steps:[
    'Find the internal water stopcock — commonly under the kitchen sink, in an airing cupboard or under the stairs — and turn it off and on to make sure it actually moves.',
    'Find the external stop valve too, usually under a small cover at the boundary.',
    'Find the consumer unit and learn which breaker does what, labelling anything unlabelled.',
    'Find the gas meter and its emergency control valve, and learn which way turns it off.',
    'Learn what to do if you smell gas: no switches or flames, open windows, turn off at the meter, get out and call the emergency gas number from outside.',
    'Label all three, photograph them, and show everyone in the household.'
  ],
  tips:[
    'Seized stopcocks are extremely common. Exercise yours twice a year so it works when you need it.',
    'Never turn a gas supply back on yourself after an emergency shut-off — that is a job for a registered engineer.'
  ],
  proof:'Everyone in the household can find and operate all three in the dark.'
},
{
  id:'fire-extinguisher', cat:'safety', name:'Use a fire extinguisher', time:'1–2 hours', level:'Easy',
  blurb:'Knowing the right extinguisher for the fire, and knowing when to walk away instead, matters more than the technique — which is four letters long.',
  gear:['Extinguishers appropriate to your home','A fire blanket for the kitchen','A hands-on session if your workplace offers one'],
  steps:[
    'Learn the classes and what matches them: water for wood and paper, CO2 for electrical, foam or powder for liquids, wet chemical for cooking oil.',
    'Learn what never to do: water on an electrical or oil fire, which spreads it explosively.',
    'Learn PASS: Pull the pin, Aim at the base of the flames, Squeeze the handle, Sweep side to side.',
    'Learn the decision rule: only fight a small, contained fire, with your back to a clear exit, and only once the alarm is raised and people are leaving.',
    'Learn to use a fire blanket for a pan fire — never move a burning pan, and never use water.',
    'Check the pressure gauges on your extinguishers twice a year.'
  ],
  tips:[
    'If a fire is bigger than a wastebasket, get out and call the fire service. Extinguishers buy an escape route, not a victory.',
    'Smoke incapacitates far faster than flame. Leaving early beats fighting well.'
  ],
  proof:'You can pick the right extinguisher for four different fires and state when you would not fight one.'
},
{
  id:'smoke-alarms', cat:'safety', name:'Set up smoke and CO alarms properly', time:'An afternoon', level:'Easy',
  blurb:'Alarms only work where they are placed correctly and tested. This is a half-hour job that is repeatedly shown to be the difference between a fire and a fatal fire.',
  gear:['Smoke alarms for each floor','A carbon monoxide alarm for any room with a fuel-burning appliance','A drill and a step ladder'],
  steps:[
    'Fit at least one smoke alarm on every level, in hallways and landings, and ideally in bedrooms.',
    'Mount them on the ceiling, near the centre of the room, away from corners, vents and bathrooms.',
    'Fit a heat alarm rather than a smoke alarm in the kitchen so cooking does not cause nuisance alarms people then disable.',
    'Fit a CO alarm in any room with a boiler, stove, fire or flue, at the height the manufacturer specifies.',
    'Test them monthly and replace batteries as needed; replace whole units after their stated lifespan, usually ten years.',
    'Make an escape plan the household has actually walked through, including a meeting point.'
  ],
  tips:[
    'A removed battery is the most common failure. If cooking triggers it, move the alarm rather than disabling it.',
    'Carbon monoxide is odourless. Only an alarm detects it, and headaches and drowsiness that improve when you leave the house are a warning sign.'
  ],
  proof:'Working, in-date alarms on every level, tested this month, and a household escape plan everyone knows.'
}
]);
