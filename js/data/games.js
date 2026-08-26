window.SKILLS = (window.SKILLS || []).concat([
{
  id:'poker-fundamentals', cat:'games', name:'Learn poker fundamentals', time:'2–4 weeks', level:'Moderate',
  blurb:'Texas hold’em is easy to play and hard to play well. Position, starting hands and pot odds are the three ideas that separate a losing player from a competent one.',
  gear:['A deck of cards and chips, or a play-money app','A starting-hand chart'],
  steps:[
    'Learn the hand rankings cold, then the betting rounds and the mechanics of blinds and position.',
    'Learn a tight starting-hand chart by position and follow it strictly at first. Playing too many hands is the beginner leak.',
    'Learn why position matters: acting last means acting with more information, which is worth more than most cards.',
    'Learn pot odds — comparing the price of a call to your chance of improving — and the rule of two and four for quick estimates.',
    'Learn to fold. Most money is saved rather than won, and chasing draws without the odds is how beginners bleed out.',
    'Review your sessions honestly, and play for stakes you genuinely do not mind losing.'
  ],
  tips:[
    'Bluffing matters far less at low stakes than simply playing better hands than your opponents.',
    'Gamble responsibly: set a loss limit before you sit down and stop when you reach it. If it stops being fun, stop playing.'
  ],
  proof:'You can calculate pot odds at the table and articulate why you folded a hand you wanted to play.'
},
{
  id:'backgammon', cat:'games', name:'Learn backgammon', time:'2–4 weeks', level:'Moderate',
  blurb:'Five thousand years old and still one of the best games there is: enough luck that a beginner can beat an expert once, enough skill that they will not do it twice.',
  gear:['A backgammon set','A doubling cube'],
  steps:[
    'Learn the setup, movement, and how bearing off works.',
    'Learn the key concepts: making points, blots, hitting and the bar.',
    'Learn the opening rolls — there are only fifteen and the best replies are well established.',
    'Learn to count pips so you know whether you are in a race or a holding game, and play accordingly.',
    'Learn the doubling cube, which is where most of the real skill lives.',
    'Play often against a bot that shows equity, and review the moves it disagreed with.'
  ],
  tips:[
    'Leaving blots you do not need to is the beginner leak. Count the shots that can hit you.',
    'When ahead in the race, race. When behind, play a holding game and wait for a shot.'
  ],
  proof:'You beat a decent bot on its intermediate setting more often than not over 20 games.'
},
{
  id:'cribbage', cat:'games', name:'Learn cribbage', time:'1–2 weeks', level:'Easy',
  blurb:'A pub classic with a board, a peg and its own vocabulary. The scoring feels arcane for two evenings and then becomes automatic.',
  gear:['A cribbage board and a deck of cards','A patient opponent'],
  steps:[
    'Learn the scoring combinations: fifteens, pairs, runs, flushes and his nobs.',
    'Learn the flow: the deal, the crib, the cut, the play to 31, and the show.',
    'Learn to count a hand quickly and accurately — this is the actual skill.',
    'Learn discard strategy: what to keep and what to throw into your own crib versus your opponent’s.',
    'Learn the play tactics: leading low cards, avoiding setting up fifteens for your opponent.',
    'Play a lot. Cribbage counting only becomes fast through repetition.'
  ],
  tips:[
    'Muggins — where your opponent claims points you missed — is the traditional incentive to count carefully.',
    'Keeping a 5 is almost always valuable, because so many combinations make fifteen with it.'
  ],
  proof:'You count any hand correctly in a few seconds and hold your own against a regular player.'
},
{
  id:'trick-taking-game', cat:'games', name:'Learn a trick-taking card game', time:'1–2 weeks', level:'Easy',
  blurb:'Hearts, spades, whist or euchre — one solid trick-taking game means you can join almost any card table anywhere in the world.',
  gear:['A deck of cards','Three other people, ideally'],
  steps:[
    'Pick one game and learn its rules properly, including the scoring, which is where variants differ most.',
    'Learn the universal grammar: following suit, trumps, and who leads the next trick.',
    'Learn to count trumps as they are played. This one habit separates competent players from beginners.',
    'Learn to signal and read your partner in partnership games, within the rules.',
    'Learn basic hand evaluation: how many tricks you can realistically expect.',
    'Play regularly with the same group and discuss hands afterwards.'
  ],
  tips:[
    'House rules vary enormously. Agree the scoring before the first deal.',
    'Leading trumps early is right in some games and disastrous in others. Learn which yours is.'
  ],
  proof:'You play a full game confidently without needing the rules explained or checked.'
},
{
  id:'go-basics', cat:'games', name:'Learn the basics of Go', time:'3–6 weeks', level:'Hard',
  blurb:'Simpler rules than chess and vastly more room. Start on a 9×9 board, where a beginner can genuinely play a complete, satisfying game within an hour of learning.',
  gear:['A 9×9 board or an app','A go-playing server for opponents at your level'],
  steps:[
    'Learn the rules, which take ten minutes: place stones, capture by removing liberties, and the ko rule.',
    'Learn the concept of life and death — two eyes make a group unconditionally alive.',
    'Play many 9×9 games rather than studying. The board teaches faster than books at this stage.',
    'Learn basic capturing tactics: the ladder, the net and the snapback.',
    'Learn to count liberties before starting a fight, and to recognise when a group is already dead.',
    'Move to 13×13 and then 19×19 only once 9×9 games feel like they make sense.'
  ],
  tips:[
    'Beginners fight over everything. Learning when to leave a group and play elsewhere is the big leap.',
    'Playing on a full 19×19 board too early is why most beginners bounce off Go.'
  ],
  proof:'You play a complete 9×9 game, correctly identify which groups are alive, and count the score.'
},
{
  id:'chess-endgames', cat:'games', name:'Learn basic chess endgames', time:'2–4 weeks', level:'Moderate',
  blurb:'Most club games end with few pieces on the board, and most players have no idea what to do there. A handful of endgame positions is the cheapest rating you will ever gain.',
  gear:['A board','An endgame trainer or a simple book'],
  steps:[
    'Learn king and queen versus king, and king and rook versus king, until you can mate without thinking.',
    'Learn the opposition — the fundamental king-and-pawn concept that decides whether a pawn promotes.',
    'Learn the square of the pawn, for calculating at a glance whether a king can catch a runner.',
    'Learn key pawn endings: king and pawn versus king, from both sides.',
    'Learn the Lucena and Philidor positions in rook endings, which cover an enormous share of practical rook endgames.',
    'Practise each against an engine set to defend perfectly.'
  ],
  tips:[
    'The king becomes an attacking piece in the endgame. Beginners leave it in the corner.',
    'A drawn endgame you convert to a win is worth exactly as much as a brilliant opening.'
  ],
  proof:'You convert king and rook versus king in under 20 moves and win a won pawn ending against an engine.'
},
{
  id:'dominoes', cat:'games', name:'Learn dominoes properly', time:'1 week', level:'Easy',
  blurb:'Not just matching numbers. Real dominoes — fives-and-threes, or a block game — involves counting, blocking and reading what your opponent cannot play.',
  gear:['A double-six or double-nine set','Opponents'],
  steps:[
    'Learn one proper scoring game rather than the children’s matching version — fives-and-threes is the classic.',
    'Learn to track which numbers have been played and how many of each remain.',
    'Learn to watch what your opponent passes on: it tells you exactly which suits they lack.',
    'Learn blocking play — closing the game when you hold fewer pips than your opponent.',
    'Learn to manage your hand so you keep options rather than being forced to knock.',
    'Play regularly with the same opponents and learn their habits.'
  ],
  tips:[
    'Counting what has gone is the whole skill. Players who do it beat players who do not, consistently.',
    'Holding a double too long is a common way to get stuck with it.'
  ],
  proof:'You win consistently against casual players and can say what your opponent is holding late in a hand.'
},
{
  id:'mahjong', cat:'games', name:'Learn mahjong basics', time:'3–5 weeks', level:'Moderate',
  blurb:'Four players, 144 tiles and a genuinely deep game underneath the tile-matching apps that share its name. The barrier is the vocabulary, not the difficulty.',
  gear:['A mahjong set, or an app with the full rules','Three other players'],
  steps:[
    'Pick a ruleset and stick to it — Riichi, Hong Kong and American mahjong differ substantially.',
    'Learn the tiles: three suits, winds, dragons, and how a standard winning hand is built from four sets and a pair.',
    'Learn the flow of a hand: drawing, discarding, and calling tiles from other players.',
    'Learn the common scoring patterns, which is where the strategy lives.',
    'Learn defensive discarding — reading what other players are collecting from their discards.',
    'Play with experienced players, who will teach you far faster than any book.'
  ],
  tips:[
    'The tile-matching solitaire game shares only the tiles. This is a completely different thing.',
    'Riichi mahjong has the best learning resources in English if you have no local group.'
  ],
  proof:'You play a full four-player game, score your own hands correctly and discard defensively.'
},
{
  id:'table-tennis-serve', cat:'games', name:'Learn table tennis spin and serve', time:'3–6 weeks', level:'Moderate',
  blurb:'The gap between garage table tennis and the real game is spin. Learning to produce it and read it transforms both your serve and your ability to return one.',
  gear:['A bat with decent rubber, not a bare wooden paddle','A table and a box of balls'],
  steps:[
    'Learn the grip — shakehand for most people — and a relaxed ready stance.',
    'Learn to generate spin by brushing the ball rather than hitting through it, and feel how differently it bounces.',
    'Learn the backspin push and the topspin drive as your two base strokes.',
    'Learn a backspin serve and a sidespin serve, disguising them with a similar action.',
    'Learn to read spin from your opponent’s bat direction at contact, and to adjust your bat angle to counter it.',
    'Practise serves alone with a box of balls — it is the only stroke you can perfect without a partner.'
  ],
  tips:[
    'Returning backspin into the net repeatedly means you need to open the bat face, not hit harder.',
    'A legal serve is thrown up at least 16 cm from an open flat palm, behind the end line.'
  ],
  proof:'You serve three genuinely different spins on demand and read your opponent’s serve well enough to return it.'
},
{
  id:'bowling-hook', cat:'games', name:'Bowl a hook', time:'4–8 sessions', level:'Moderate',
  blurb:'A hooking ball enters the pocket at an angle and scatters pins far better than a straight ball. It comes from the release, not from throwing across your body.',
  gear:['A ball drilled to fit your hand, if you get serious','A bowling alley and a few evenings'],
  steps:[
    'Fix the fundamentals: a consistent four or five-step approach and a straight, pendulum arm swing.',
    'Aim at the arrows on the lane, not at the pins. Everyone who aims at the pins is less accurate.',
    'Learn the release: keep the hand behind the ball and rotate it slightly counter-clockwise at the bottom, like shaking hands then turning a doorknob.',
    'Let the thumb come out first and the fingers lift, which is what imparts the roll.',
    'Adjust your starting position, not your aim, when the ball misses left or right.',
    'Learn to read the lane as oil moves during a session.'
  ],
  tips:[
    'Muscling the ball kills accuracy. Let the swing do the work and keep the arm loose.',
    'House balls with wide thumb holes make a proper release almost impossible.'
  ],
  proof:'A repeatable hook that consistently enters the pocket, and an average above 130.'
},
{
  id:'scrabble-strategy', cat:'games', name:'Learn Scrabble strategy', time:'2–4 weeks', level:'Moderate',
  blurb:'Scrabble is not a vocabulary test, it is a board-control and rack-management game. Two lists and three principles beat a large vocabulary played badly.',
  gear:['A Scrabble set','A list of two-letter and three-letter valid words'],
  steps:[
    'Learn the two-letter word list. It is about a hundred words and it is the single highest-value study in the game.',
    'Learn rack management: aim to keep a balance of vowels and consonants, and dump awkward tiles early.',
    'Learn to play the board, not just the word — do not open a triple word score for your opponent to use.',
    'Learn the hooks: words that take an S, or that extend existing words.',
    'Learn to value a 50-point bingo bonus and to hold tiles that make seven-letter plays likely.',
    'Track the tiles that have gone, especially the blanks and the S tiles.'
  ],
  tips:[
    'The highest-scoring play is often the wrong play if it opens a triple lane for your opponent.',
    'Q without U words are worth memorising; there are only a handful.'
  ],
  proof:'You beat casual players consistently and average over 300 points a game.'
},
{
  id:'teach-a-game', cat:'games', name:'Teach a board game well', time:'2–3 weeks', level:'Moderate',
  blurb:'An underrated social skill. A badly explained game ruins an evening; a well-taught one has everyone playing confidently within ten minutes.',
  gear:['A game you know well','Willing victims'],
  steps:[
    'Start with the goal: what winning looks like, in one sentence, before any rule at all.',
    'Give the shape next: how long it lasts, roughly what a turn involves, how the game ends.',
    'Teach the turn structure, then the exceptions — never the exceptions first.',
    'Set up a visible example rather than describing abstractly, and point at components as you name them.',
    'Say explicitly what you are leaving out and promise to cover it when it comes up.',
    'Play an open first round where everyone can ask anything and take back moves.'
  ],
  tips:[
    'Reading the rulebook aloud is the classic failure. Teach the shape, then the details.',
    'Do not explain the strategy while teaching the rules. It doubles the cognitive load.'
  ],
  proof:'You teach a medium-complexity game to four new players and they are playing confidently within fifteen minutes.'
}
]);
