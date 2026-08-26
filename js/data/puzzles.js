window.SKILLS = (window.SKILLS || []).concat([
{
  id:'rubiks-3x3', cat:'puzzles', name:'Solve a 3×3 Rubik’s Cube', time:'1–2 weeks', level:'Moderate',
  blurb:'The cube is not a puzzle you out-think, it is a set of about seven algorithms you memorise and then apply in a fixed order. Almost everyone who practises deliberately for a week can solve any scramble unaided.',
  gear:['A modern speedcube — a Rubik’s brand cube is stiff and will fight you','A printed copy of the beginner method'],
  steps:[
    'Learn the vocabulary first: faces U, D, L, R, F, B, a plain letter means a clockwise quarter turn, an apostrophe means anticlockwise. Practise turning to spoken letters until you no longer have to think.',
    'Solve the white cross so the edge colours also match the side centres. Do this by intuition, not algorithms — it is the only part you should reason through.',
    'Solve the first two layers by inserting the four white corners with the R U R’ U’ trigger, then the four middle edges with the two mirrored edge-insertion algorithms.',
    'Orient the last layer: make the yellow cross with F R U R’ U’ F’, then flip the remaining corners with repeated R U R’ U R U2 R’ while turning only the top face between repetitions.',
    'Permute the last layer: cycle the corners into place, then cycle the edges. Two algorithms, and the cube is solved.',
    'Do ten scrambled solves a day with the sheet in front of you, then ten more without it.'
  ],
  tips:[
    'Do not learn the layers out of order. Every step assumes the one before it is already solved.',
    'When an algorithm seems to wreck your progress, it usually has not — finish the whole sequence before judging.',
    'Hold the cube in a fixed orientation during an algorithm. Most beginner failures are re-gripping mid-sequence.'
  ],
  proof:'Someone else scrambles the cube out of your sight and you solve it, no notes, three times running.'
},
{
  id:'rubiks-2x2', cat:'puzzles', name:'Solve a 2×2 Rubik’s Cube', time:'2–3 days', level:'Easy',
  blurb:'The 2×2 is a 3×3 with no edges and no centres — corners only. If you know the beginner 3×3 method you already know enough to solve it; if you do not, this is the gentler place to start.',
  gear:['Any 2×2 cube'],
  steps:[
    'Pick a colour and solve one whole face, matching the side colours of those four corners as a band around the cube.',
    'Orient the opposite face using the same R U R’ U R U2 R’ repetition you would use on a 3×3, turning only the top between repeats.',
    'Permute the last four corners with a single corner-swap algorithm, applied once or twice.',
    'Practise recognising the last-layer case at a glance rather than counting stickers.',
    'Time yourself over ten solves and try to break your own average.'
  ],
  tips:[
    'There are no centres, so nothing tells you which colour goes where — use the corners you have already solved as the reference.',
    'If you learn the 2×2 first, the 3×3 last layer will feel familiar rather than new.'
  ],
  proof:'You solve any scramble in under a minute without looking at notes.'
},
{
  id:'rubiks-sub60', cat:'puzzles', name:'Solve a Rubik’s Cube under 60 seconds', time:'2–4 weeks after the basics', level:'Moderate',
  blurb:'Sub-60 is not a new method, it is the same beginner method with the pauses taken out. Speed comes from looking ahead and from finger tricks, not from turning faster.',
  gear:['A well-tensioned speedcube, lightly lubricated','A stopwatch or a cube timer app'],
  steps:[
    'Get the beginner method fully automatic first — no algorithm sheet, no hesitation.',
    'Learn finger tricks: turn U with an index flick and R with a thumb push instead of regripping the whole cube.',
    'Use the 15 seconds of inspection to plan your entire cross before you start turning.',
    'Practise “look-ahead”: while your hands finish a pair, your eyes hunt for the next one. Deliberately turn slower than you can to force this.',
    'Replace the beginner corner insert with intuitive F2L pairing — this alone usually takes 20 seconds off.',
    'Do timed sessions of 12 solves and track the average, not the single best.'
  ],
  tips:[
    'Your single fastest solve is mostly luck. Judge yourself on the average of twelve.',
    'Turning frantically makes you slower because it kills look-ahead. Smooth beats fast.'
  ],
  proof:'Three solves under 60 seconds within a single session of twelve.'
},
{
  id:'card-tricks', cat:'puzzles', name:'Learn several impressive card tricks', time:'2–3 weeks', level:'Moderate',
  blurb:'A handful of well-chosen tricks covers most situations: one self-working, one that uses a key card, one force, one with a false shuffle. The performance matters more than the method.',
  gear:['Two identical decks of poker-size cards, Bicycle or similar','A mirror or a phone camera'],
  steps:[
    'Start with one self-working trick that relies on maths, not sleight of hand — it lets you practise presentation with zero technical risk.',
    'Learn the key-card principle: glimpse the bottom card, have theirs placed on top, cut, and their card is now next to your key.',
    'Learn one force (the classic cross-cut force is the easiest and fools nearly everyone) so you can control which card is “freely chosen”.',
    'Learn one false shuffle — an overhand shuffle that keeps the top stock intact is enough.',
    'Build a five-minute set: three tricks with different-looking methods, escalating in impact, ending on your strongest.',
    'Film yourself performing the set and watch it back with the sound off to catch the moments your hands give you away.'
  ],
  tips:[
    'Never repeat a trick for the same audience — the second viewing is where they solve it.',
    'Never explain the method, however much they ask. The mystery is the whole product.',
    'Talk through the moves you want them to remember; stay quiet through the ones you do not.'
  ],
  proof:'You perform three tricks back to back for people who did not know it was coming, and nobody catches the method.'
},
{
  id:'coin-tricks', cat:'puzzles', name:'Learn coin tricks and basic sleight of hand', time:'2–4 weeks', level:'Moderate',
  blurb:'Coin magic is built on two ideas: a palm that hides a coin in a relaxed-looking hand, and a false transfer that convinces the eye a coin moved when it did not. Everything else is decoration.',
  gear:['Four matching coins, larger than a small coin — half dollars or £2 coins work well','A mirror'],
  steps:[
    'Learn the classic palm: hold a coin in the fleshy base of your thumb with your hand relaxed and slightly curved. Wear it around the house while doing other things until it stops feeling like a claw.',
    'Learn the French drop, the standard false transfer: appear to take the coin into the other hand while retaining it in the first.',
    'Practise the retention-of-vision variant, where the spectator briefly sees the coin in the hand that never actually receives it.',
    'Add a production: the coin reappears from an elbow, an ear, or a spectator’s collar.',
    'Learn one three-coin routine that strings a vanish, a reappearance and a transposition together.',
    'Perform for a mirror, then a camera, then one forgiving friend.'
  ],
  tips:[
    'The empty hand must move as if it holds the coin, and the loaded hand must forget it entirely.',
    'Look at the hand you want them to watch. Eyes lead attention far more reliably than words.',
    'Relaxed fingers sell the illusion; tension is the only thing that ever exposes a palm.'
  ],
  proof:'You vanish a coin cleanly for someone standing an arm’s length away, and they ask to see your hands.'
},
{
  id:'memorize-deck', cat:'puzzles', name:'Memorize a shuffled deck of cards', time:'3–4 weeks', level:'Hard',
  blurb:'You are not memorising cards, you are converting each card into a vivid person or object and walking them through a familiar building. The system does the work; you supply the images.',
  gear:['A deck of cards','A timer','A written list of your 52 images'],
  steps:[
    'Build a 52-image system: give every card a fixed character or object. Suits usually map to a category, ranks to a number-sound. Write the list out and drill it as flashcards until recall is instant.',
    'Build a memory palace with 26 clearly ordered locations in a place you know intimately — your home, your route to work.',
    'Practise pairs: turn two cards at a time into one absurd interacting image and place it at a location.',
    'Memorise a quarter of the deck first, recall it perfectly, then half, then the whole thing. Never move up until the shorter version is clean.',
    'Recall out loud, in order, from your starting location. Note exactly which locations failed and make those images stranger.',
    'Once accurate, start the clock and shave the time down.'
  ],
  tips:[
    'Weak images are the failure point every time. Make them violent, absurd, loud, or funny — never merely present.',
    'Use each palace at most once a day, or old images will bleed into new ones.',
    'Accuracy first. A 90-second run with three mistakes is worse than a five-minute perfect one.'
  ],
  proof:'You memorise a freshly shuffled deck and recite all 52 cards in order with no errors.'
},
{
  id:'pi-digits', cat:'puzzles', name:'Memorize 50–100 digits of pi', time:'3–7 days', level:'Easy',
  blurb:'A small, self-contained party trick and the cleanest introduction to number-memory systems. Rote repetition works for 50 digits; a system makes 100 comfortable.',
  gear:['A printed list of the digits, chunked in groups of five'],
  steps:[
    'Write the digits out in groups of five and read them aloud in a fixed rhythm — the rhythm itself becomes a memory cue.',
    'Learn the first 20 to the point where you can say them faster than you can think.',
    'For the next stretch, convert each pair or triple of digits into an image using a number-shape or number-sound system, then place those images along a route through your home.',
    'Recite from the start every session. The beginning gets over-learned, which is exactly what you want under pressure.',
    'Practise recall while distracted — walking, cooking, with music on — so it survives an audience.'
  ],
  tips:[
    'The failure point is always the same stretch. Give that one extra passes rather than repeating the whole thing.',
    'Reciting to another person is far harder than reciting alone. Rehearse it that way at least once.'
  ],
  proof:'You recite 50 digits aloud to someone checking against a printout, cold.'
},
{
  id:'memory-palace', cat:'puzzles', name:'Learn the memory palace technique', time:'1 week', level:'Easy',
  blurb:'The method of loci is 2,000 years old and still the most effective memory tool there is: you attach what you want to remember to places you already know by heart.',
  gear:['A place you know extremely well'],
  steps:[
    'Choose a building you can walk through in your mind and fix a route with 10 to 20 stations, always in the same order.',
    'Walk it physically once, saying each station out loud, then walk it in your head until the order is automatic.',
    'Take a 10-item list and turn each item into an exaggerated image interacting with its station — not sitting there, but breaking, burning or blocking it.',
    'Recall by walking the route mentally. Recall it backwards too; that proves the route is solid rather than a chain.',
    'Build a second and third palace so you can retire one for a few days between uses.',
    'Apply it to something real: a speech outline, a shopping list, a set of names.'
  ],
  tips:[
    'Stations should be distinct. Four identical chairs in a row will blur into one.',
    'Odd, rude and funny images stick. Sensible ones evaporate.'
  ],
  proof:'You hear a 20-item list once and repeat it in order, then backwards.'
},
{
  id:'speed-reading', cat:'puzzles', name:'Learn basic speed reading techniques', time:'1–2 weeks', level:'Easy',
  blurb:'The honest version: you cannot read 5,000 words a minute with comprehension, but most people can move from roughly 200 to 400 words a minute on non-technical text by fixing two habits.',
  gear:['Books you actually want to read','A timer'],
  steps:[
    'Measure your baseline: read for three minutes, count the words, and write down a two-sentence summary to check comprehension.',
    'Reduce subvocalisation — the inner voice reading aloud — by humming quietly or counting silently while your eyes move.',
    'Stop regressing. Run a finger or pen under the line as a pacer so your eyes cannot flick backwards.',
    'Widen your fixations: practise taking in three or four words per stop rather than one, by fixing your gaze slightly inside each margin.',
    'Practise previewing: read headings, first sentences and the conclusion before reading properly, so your brain has a map.',
    'Re-measure weekly, always with the comprehension check attached.'
  ],
  tips:[
    'Speed techniques belong to easy prose. Dense technical material and poetry deserve to be read slowly.',
    'A speed gain that costs comprehension is not a gain, it is skimming with extra steps.'
  ],
  proof:'You double your baseline rate on general non-fiction while still summarising each chapter accurately.'
},
{
  id:'mental-percentages', cat:'puzzles', name:'Calculate percentages quickly in your head', time:'2–3 days', level:'Easy',
  blurb:'A handful of tricks turn restaurant tips, discounts and interest into single-step arithmetic. This is the highest-value mental maths there is because you use it weekly.',
  gear:['Nothing'],
  steps:[
    'Learn to find 10% instantly by moving the decimal point, then build everything else from it: 20% is double, 5% is half, 15% is 10% plus half of it.',
    'Learn the reversal rule: x% of y equals y% of x. 4% of 75 is awkward; 75% of 4 is three.',
    'Learn 1% for fine adjustments, and combine: 37% is 25% plus 10% plus 2%.',
    'Practise discounts as subtraction from the whole: 30% off means paying 70%, which is 10% times seven.',
    'Drill in real life — every menu, receipt and sale sign for a week, before you check with a phone.'
  ],
  tips:[
    'Round first, correct after. “About 12, so a bit under” beats a stalled exact calculation.',
    'Say the intermediate number out loud or under your breath; it stops you losing it mid-sum.'
  ],
  proof:'You call an accurate 18% tip on an awkward bill before anyone unlocks a phone.'
},
{
  id:'mental-math', cat:'puzzles', name:'Learn common mental math shortcuts', time:'1–2 weeks', level:'Moderate',
  blurb:'Fast mental arithmetic is a small toolkit of tricks plus the habit of working left to right instead of the way you were taught at school.',
  gear:['A notebook for drills'],
  steps:[
    'Switch to left-to-right addition: add the hundreds, then the tens, then the units, keeping one running number in your head.',
    'Learn multiplication by 11 (add the neighbouring digits), by 5 (halve then times ten) and by 9 (times ten, subtract the number).',
    'Learn squaring numbers ending in 5: the tens digit times its successor, then stick 25 on the end. 65² is 6×7 then 25, so 4225.',
    'Learn the difference-of-squares trick for near pairs: 48×52 is 50² minus 2², so 2496.',
    'Learn casting out nines as a check on your answers.',
    'Drill five minutes a day with random two-digit problems and check your work.'
  ],
  tips:[
    'Estimating first gives you a sanity check, and catches the tenfold slips that make you look foolish.',
    'Speed follows accuracy. Get it right slowly for a week and fast arrives on its own.'
  ],
  proof:'You multiply any two two-digit numbers in your head in under ten seconds, reliably.'
},
{
  id:'logical-fallacies', cat:'puzzles', name:'Recognise basic logical fallacies', time:'1 week', level:'Easy',
  blurb:'Learning a dozen named fallacies changes how you read news, arguments and advertising — and, more usefully, how you spot the weak joints in your own reasoning.',
  gear:['A list of the classic fallacies','A source of arguments: opinion columns, forums, adverts'],
  steps:[
    'Learn the six that appear most often: straw man, ad hominem, false dilemma, appeal to authority, slippery slope, and circular reasoning.',
    'Add the statistical cousins: correlation mistaken for causation, survivorship bias, base-rate neglect and cherry-picking.',
    'Read one opinion piece a day and name every move the writer makes, fair or not.',
    'Practise steel-manning: restate an argument you disagree with in its strongest form before criticising it. Most “fallacies” dissolve.',
    'Audit your own last three arguments for the same errors, honestly.'
  ],
  tips:[
    'A fallacy makes an argument unsupported, not automatically wrong. Calling “fallacy!” is not itself a rebuttal.',
    'Naming fallacies out loud in conversation rarely persuades anyone. Ask a question that exposes the gap instead.'
  ],
  proof:'You can read an opinion column and describe the actual structure of its argument, including where it holds up.'
},
{
  id:'chess-tactics', cat:'puzzles', name:'Learn beginner chess tactics', time:'2–4 weeks', level:'Moderate',
  blurb:'Below club level, almost every game is decided by a hanging piece or a two-move tactic. Learning the standard patterns is worth more than any amount of opening theory.',
  gear:['A free tactics-puzzle site or app','A board, physical or on screen'],
  steps:[
    'Learn the six core patterns cold: fork, pin, skewer, discovered attack, double attack and removing the defender.',
    'Do 15 to 20 puzzles a day, and force yourself to calculate the full line before moving rather than guessing and retrying.',
    'Learn the basic checkmate patterns: back-rank, smothered mate, and mating with queen plus king.',
    'Adopt a blunder check before every move: what did my opponent’s last move attack, and what of mine is undefended?',
    'Play slow games only — 15 minutes or more — so there is time to actually apply this.',
    'Review each loss and find the single move where the game turned.'
  ],
  tips:[
    'Do not study openings yet. Three sound principles — control the centre, develop pieces, castle early — cover everything you need.',
    'Bullet chess trains speed, not chess. It will actively slow your improvement at this stage.'
  ],
  proof:'You solve a mixed set of beginner puzzles at 80% accuracy and stop losing pieces for nothing.'
},
{
  id:'sudoku', cat:'puzzles', name:'Solve Sudoku systematically', time:'1 week', level:'Easy',
  blurb:'Sudoku is a logic procedure, not a guessing game. Four techniques in a fixed order will solve every puzzle up to hard, and you should never need to guess.',
  gear:['A book or app with graded puzzles','A pencil'],
  steps:[
    'Learn scanning: for each digit, cross off rows and columns to find the single cell in a box where it can live.',
    'Pencil in candidates properly — every possible digit in every empty cell — rather than keeping them in your head.',
    'Apply naked singles (one candidate in a cell) and hidden singles (one cell in a unit for a digit) until neither yields anything.',
    'Learn naked pairs and pointing pairs to eliminate candidates when singles run out.',
    'Work a hard puzzle in that fixed order, and when stuck, re-scan rather than guessing.',
    'Time yourself on easy puzzles to build fluency before moving up a grade.'
  ],
  tips:[
    'If you are guessing, you have missed something. Guessing wrong wastes more time than a careful re-scan.',
    'Update candidates the moment you place a digit, or the grid quietly becomes wrong.'
  ],
  proof:'You solve a newspaper hard-rated puzzle with pure logic, no guesses, no eraser.'
},
{
  id:'bar-bets', cat:'puzzles', name:'Learn a few classic bar bets and puzzles', time:'2–3 days', level:'Easy',
  blurb:'Half a dozen physical puzzles and lateral-thinking chestnuts that reliably entertain a table. Cheap to learn, endlessly reusable, and unlike card tricks they can be taught to the audience afterwards.',
  gear:['Coins, matches or toothpicks, a beer mat, a napkin, glasses'],
  steps:[
    'Learn two matchstick puzzles — move one match to correct an equation, or make a given number of triangles.',
    'Learn a coin-arrangement puzzle where the solution is a move nobody considers.',
    'Learn one physical stunt with a plausible-sounding rule, like lifting a bottle with a straw or getting a coin under a glass without touching it.',
    'Learn a lateral-thinking riddle and practise answering yes-or-no questions patiently while people work it out.',
    'Rehearse the patter: the setup, the false confidence, the reveal. Timing does more work than the puzzle.',
    'Test the whole set on friends and cut the one that lands flattest.'
  ],
  tips:[
    'Never bet money. “Loser gets the next round” keeps it friendly and stops it being a con.',
    'Let people struggle for a bit, then hand them the answer generously. Smugness kills the room.'
  ],
  proof:'You run three puzzles at a table and the group asks you for another.'
}
]);
