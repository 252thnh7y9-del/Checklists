window.SKILLS = (window.SKILLS || []).concat([
{
  id:'touch-typing', cat:'technology', name:'Touch type at 50+ words per minute', time:'3–6 weeks', level:'Moderate',
  blurb:'The highest-return technology skill on this list if you use a computer daily. The hard part is the fortnight where you are deliberately slower than your old hunt-and-peck.',
  gear:['A typing tutor site with lessons and tests','A decent keyboard','Optionally a cloth to cover your hands'],
  steps:[
    'Learn the home row and the finger-to-key assignments. Every finger has a fixed territory, and this is the whole system.',
    'Never look down. Cover your hands if you must — looking is what stops the map forming.',
    'Drill accuracy first at a slow speed. Speed built on 90% accuracy is a dead end, because corrections cost more than the speed gained.',
    'Do 15 to 20 minutes daily rather than long sessions. This is motor learning and it consolidates overnight.',
    'Learn the number row and the symbols, which most self-taught typists never do properly.',
    'Type real prose rather than random words, and test weekly to track WPM and accuracy together.'
  ],
  tips:[
    'Expect two weeks of being slower than before. Everyone goes through it and most quitters quit there.',
    'Accuracy above 97% first, then speed. Speed follows accuracy far more reliably than the reverse.',
    'Learn proper posture and wrist position now rather than after the RSI.'
  ],
  proof:'Sustained 50+ WPM at 97% accuracy on unfamiliar prose, without looking at the keyboard.'
},
{
  id:'keyboard-shortcuts', cat:'technology', name:'Learn useful keyboard shortcuts', time:'2–3 weeks', level:'Easy',
  blurb:'Twenty shortcuts, properly internalised, save hours a week. The trick is learning them a few at a time, in the apps you actually live in.',
  gear:['The apps you use daily','A sticky note for the ones you are learning this week'],
  steps:[
    'Learn the universal set first: copy, paste, undo, redo, save, find, select all, switch app, close tab, reopen closed tab.',
    'Learn text navigation: move and select by word and by line with modifier keys, which is where most editing time is actually spent.',
    'Learn your browser’s tab and address-bar shortcuts.',
    'Learn your OS window management: snapping, virtual desktops, spotlight or the start-menu search.',
    'Add three new shortcuts a week, written on a note, and force yourself to use them instead of the mouse.',
    'Learn your main application’s command palette, which often replaces memorising dozens of individual shortcuts.'
  ],
  tips:[
    'Learning a shortcut you use once a month is wasted. Optimise for the actions you repeat daily.',
    'Deliberately banning the mouse for an hour is an unpleasant but very effective drill.'
  ],
  proof:'You go a full working hour with the mouse untouched for common operations.'
},
{
  id:'command-line', cat:'technology', name:'Learn basic command-line navigation', time:'1–2 weeks', level:'Moderate',
  blurb:'A dozen commands cover most everyday terminal work, and they unlock scripting, servers and version control. It is a vocabulary problem, not a difficulty problem.',
  gear:['A terminal: Terminal on macOS or Linux, PowerShell or WSL on Windows','A scratch directory to experiment in'],
  steps:[
    'Learn the mental model: you are always somewhere in the filesystem, and most commands act on where you are.',
    'Learn navigation and inspection: pwd, ls, cd, tree, and the difference between absolute and relative paths.',
    'Learn file operations: mkdir, cp, mv, rm, touch, cat, less — and the fact that rm has no undo.',
    'Learn searching: grep and find, which are the two that repay study most.',
    'Learn pipes and redirection, which is the idea that makes the shell powerful rather than just an alternative file browser.',
    'Learn tab completion, history search and the up arrow, then do a real task entirely in the terminal.'
  ],
  tips:[
    'rm -rf has no undo and no recycle bin. Never run it with a variable or wildcard you have not checked.',
    'Tab completion prevents most typos and is the single biggest speed win.',
    'Read the man page or --help before searching the web. It is usually faster.'
  ],
  proof:'You navigate, search, move and inspect files for a real task without leaving the terminal.'
},
{
  id:'simple-website', cat:'technology', name:'Build a simple website', time:'2–4 weeks', level:'Moderate',
  blurb:'From a blank file to something live on the internet with your own name on it. The publishing step is what makes it real, and it is free.',
  gear:['A text editor such as VS Code','A browser with developer tools','A free host: GitHub Pages, Netlify or Cloudflare Pages'],
  steps:[
    'Write a single HTML file with real structure — headings, paragraphs, links, images — and open it in a browser.',
    'Add CSS for layout and type, learning the box model, flexbox and a mobile-first media query.',
    'Make it responsive and check it on an actual phone, not just a narrow browser window.',
    'Add a small amount of JavaScript for one interactive element.',
    'Publish it: push to a Git repository and enable free hosting. Getting a live URL is the milestone.',
    'Learn the basics that make it real: a favicon, meta description, sensible page title and accessible alt text.'
  ],
  tips:[
    'Build one small complete site rather than following three half tutorials.',
    'Learn to use browser dev tools early. Inspecting live elements teaches CSS faster than any tutorial.'
  ],
  proof:'A live URL you can send to someone, that works on a phone and loads fast.'
},
{
  id:'html-css-page', cat:'technology', name:'Learn enough HTML/CSS for a personal page', time:'2–3 weeks', level:'Easy',
  blurb:'The narrower version of building a website: enough HTML and CSS to make one good-looking personal page that you fully understand.',
  gear:['A text editor','A browser'],
  steps:[
    'Learn semantic HTML: header, nav, main, section, article, footer, and why they matter for accessibility and search.',
    'Learn the CSS box model — margin, border, padding, content — which explains most layout confusion.',
    'Learn selectors and specificity, so you understand why a style is not applying.',
    'Learn flexbox properly. It covers the great majority of layouts you will need.',
    'Learn typography basics in CSS: a sensible line height, a readable measure of 60 to 75 characters, and a consistent type scale.',
    'Build a one-page personal site: who you are, what you do, how to reach you.'
  ],
  tips:[
    'Specificity conflicts are behind most "why won’t this change" moments. Learn to read the computed styles panel.',
    'Do not reach for a framework yet. Plain CSS teaches you what the framework is doing.'
  ],
  proof:'A personal page you wrote from scratch, with no framework, that looks good on desktop and phone.'
},
{
  id:'automate-task', cat:'technology', name:'Automate a repetitive task with a short script', time:'2–4 weeks', level:'Moderate',
  blurb:'Pick one annoying manual chore and make it a script. This is where programming stops being abstract, because the payoff is immediate and personal.',
  gear:['Python, or your shell','A text editor','One genuinely repetitive task you do'],
  steps:[
    'Choose a real task: renaming files in bulk, resizing images, merging spreadsheets, downloading a report every week.',
    'Write down the manual steps precisely, in order. Automating something you cannot describe is impossible.',
    'Learn just enough of one language: variables, loops, conditionals, file operations and one library.',
    'Write the script for one file or one item first, then wrap it in a loop.',
    'Add safety: print what it would do before doing it, and test on copies rather than originals.',
    'Run it for real, then improve it the next time it annoys you.'
  ],
  tips:[
    'Always dry-run first. A script that renames files wrongly does it to all of them instantly.',
    'Work on copies until you trust it. Version control or a backup counts as trust.',
    'Do not over-engineer. A 20-line script that works beats a configurable tool you never finish.'
  ],
  proof:'A script you actually use that saves you real time each week.'
},
{
  id:'spreadsheet-formulas', cat:'technology', name:'Learn basic spreadsheet formulas', time:'1–2 weeks', level:'Easy',
  blurb:'Ten functions cover the great majority of real spreadsheet work. This is quietly one of the most employable skills on the entire list.',
  gear:['Excel, Google Sheets or LibreOffice Calc','A real dataset of your own'],
  steps:[
    'Learn absolute versus relative references and the dollar-sign notation. Everything else depends on this.',
    'Learn the core set: SUM, AVERAGE, COUNT, COUNTA, IF, and nested IFs.',
    'Learn lookups — XLOOKUP where available, otherwise INDEX and MATCH, which is more robust than VLOOKUP.',
    'Learn the conditional aggregates: SUMIF, COUNTIF, SUMIFS, AVERAGEIFS.',
    'Learn text functions for cleaning data: TRIM, LEFT, RIGHT, MID, TEXTSPLIT and CONCAT.',
    'Learn to trace and fix errors, and to structure a sheet so inputs, calculations and outputs are separate.'
  ],
  tips:[
    'Never hard-code a number inside a formula. Put it in a cell and reference it.',
    'INDEX/MATCH beats VLOOKUP because it does not break when columns are inserted.',
    'A sheet with formulas scattered everywhere is unmaintainable. Keep a clear structure.'
  ],
  proof:'You clean and analyse a messy real dataset using formulas rather than manual editing.'
},
{
  id:'pivot-tables', cat:'technology', name:'Learn pivot tables', time:'1 week', level:'Easy',
  blurb:'The fastest way to summarise thousands of rows. Ten minutes to learn the basics, and it makes you look like a data analyst in any office.',
  gear:['A spreadsheet app','A dataset of at least a few hundred rows'],
  steps:[
    'Learn the data requirements first: one header row, no merged cells, no blank rows, one record per row. Most pivot table problems are actually source data problems.',
    'Build a basic pivot: rows, columns, values, and understand what each area does.',
    'Learn to change the aggregation — sum, count, average — and to format the results properly.',
    'Learn filters and slicers for interactive reports.',
    'Learn calculated fields and percentage-of-total views.',
    'Learn to refresh when source data changes, and to build a pivot over a proper table or named range so new rows are included automatically.'
  ],
  tips:[
    'Merged cells and multi-row headers break pivots. Clean the source first.',
    'A pivot over a table range updates automatically when rows are added; one over a fixed range does not.'
  ],
  proof:'You turn a raw export of thousands of rows into a clear one-page summary in under ten minutes.'
},
{
  id:'data-visualization', cat:'technology', name:'Learn basic data visualization', time:'2–3 weeks', level:'Moderate',
  blurb:'Choosing the right chart, and not lying with it. Most bad charts come from a handful of avoidable decisions.',
  gear:['A spreadsheet, or a tool like Datawrapper','Real data with a real question attached'],
  steps:[
    'Learn to match chart to question: bar for comparison across categories, line for change over time, scatter for relationships, and almost never a pie chart.',
    'Learn the honesty rules: bar charts must start at zero, axes must be labelled, and scales must not be truncated to exaggerate.',
    'Learn to reduce chart junk — no 3D, no heavy gridlines, no decorative shading. Everything that is not data should justify itself.',
    'Learn to use colour meaningfully: one accent for the point you are making, muted greys for context, and a palette that survives colour-blindness.',
    'Learn to write the title as the finding, not the topic: "Sales fell 20% after March" rather than "Monthly sales".',
    'Rebuild a bad chart you find in the wild and compare the two.'
  ],
  tips:[
    'If a chart needs a paragraph of explanation, redesign the chart.',
    'Direct labels usually beat a legend, because the reader does not have to look back and forth.'
  ],
  proof:'You make a chart that a stranger reads correctly in five seconds without asking a question.'
},
{
  id:'photo-manipulation', cat:'technology', name:'Learn basic photo manipulation', time:'2–4 weeks', level:'Moderate',
  blurb:'Layers, masks and selections — the three concepts that everything in Photoshop or GIMP is built on. Removing an object convincingly is the classic first project.',
  gear:['Photoshop, GIMP, Affinity Photo or Photopea','A mouse or a graphics tablet'],
  steps:[
    'Learn layers and non-destructive editing: adjustment layers and smart objects rather than editing pixels directly.',
    'Learn masks, which is the single most important concept — hiding rather than deleting.',
    'Learn the selection tools and how to refine an edge, especially for hair.',
    'Learn the healing brush, clone stamp and content-aware fill for removing objects.',
    'Learn to composite: match colour, contrast, grain and light direction between elements, which is what makes fakes convincing or not.',
    'Do a full project: remove a distracting object from a real photo so nobody can tell.'
  ],
  tips:[
    'Mismatched light direction is what gives away nearly every amateur composite.',
    'Work non-destructively so you can undo a decision from an hour ago.',
    'Be thoughtful about editing images of real people, and never present a manipulated photo as documentary.'
  ],
  proof:'You remove a significant object from a photo and nobody can identify where it was.'
},
{
  id:'edit-short-video', cat:'technology', name:'Edit a short video', time:'2–3 weeks', level:'Moderate',
  blurb:'One finished, watchable short video from raw footage — start to export. Finishing is the skill; most beginners have twenty unfinished timelines.',
  gear:['DaVinci Resolve, CapCut or iMovie','Footage and music you have the right to use'],
  steps:[
    'Plan the piece before editing: what it is about and roughly how long. Editing without a shape wastes hours.',
    'Log and select your best takes before assembling anything.',
    'Build a rough cut for structure only, ignoring polish.',
    'Refine the pacing, cutting anything that does not earn its place, and tighten every gap.',
    'Fix the audio: consistent levels, music ducked under speech, and a clean fade at each end.',
    'Colour correct, add titles, and export with settings appropriate for the destination.'
  ],
  tips:[
    'Finish it. An exported imperfect video teaches more than three abandoned perfect ones.',
    'Check the licence on any music you use, especially if you publish it.'
  ],
  proof:'A finished, exported video you are happy to publish, under three minutes.'
},
{
  id:'audio-editing', cat:'technology', name:'Learn basic audio editing', time:'2–3 weeks', level:'Moderate',
  blurb:'Cleaning up a recording — noise, levels, EQ, compression — makes the difference between amateur and professional far more than any microphone upgrade.',
  gear:['Audacity, Reaper or GarageBand','Closed-back headphones','Any recording to work on'],
  steps:[
    'Learn to record properly first: close mic placement, a quiet room and levels peaking around -12 dB. Fixing it later is always worse than recording it right.',
    'Learn to cut and crossfade cleanly so edits are inaudible — always cut at a zero crossing or in a silence.',
    'Learn noise reduction, applied gently. Heavy noise reduction makes voices sound underwater.',
    'Learn EQ: a high-pass filter to remove rumble, and small cuts rather than large boosts.',
    'Learn compression to even out levels, and understand the threshold and ratio controls.',
    'Learn loudness normalisation for the target platform, and export at the right format.'
  ],
  tips:[
    'A treated room beats an expensive microphone. Soft furnishings, curtains and a duvet do most of it.',
    'Small EQ moves. If you are boosting by 9 dB, the problem is the recording.'
  ],
  proof:'A cleaned-up recording with consistent levels, no audible edits and no processing artefacts.'
},
{
  id:'home-network', cat:'technology', name:'Set up a home network', time:'1–2 weeks', level:'Moderate',
  blurb:'Understanding your own network — router, DHCP, DNS, Wi-Fi channels, guest networks — fixes most of the problems people call support about.',
  gear:['Your router and its admin interface','A device to test with','A Wi-Fi analyser app'],
  steps:[
    'Log into your router properly and change the default admin password immediately.',
    'Learn the basics: what a router does, what DHCP hands out, what DNS resolves, and what your public versus private IP addresses are.',
    'Optimise Wi-Fi: choose non-overlapping channels, use 5 GHz for nearby devices and 2.4 GHz for range, and place the router centrally and high.',
    'Set up a guest network and, if supported, a separate network for smart-home devices.',
    'Learn to give important devices a fixed address via DHCP reservation, and to forward a port if you genuinely need to.',
    'Learn to diagnose: ping, traceroute, and how to tell a Wi-Fi problem from an internet problem.'
  ],
  tips:[
    'Use WPA3 or WPA2 with a long passphrase, and turn WPS off — it is a known weak point.',
    'Keep the router firmware updated. Home routers are a common attack target.',
    'Mesh systems solve coverage problems that no amount of channel tuning will.'
  ],
  proof:'Strong coverage in every room, a working guest network, and you can diagnose a slowdown yourself.'
},
{
  id:'cyber-hygiene', cat:'technology', name:'Learn basic cybersecurity hygiene', time:'1–2 weeks', level:'Easy',
  blurb:'Six habits prevent the overwhelming majority of real-world compromises. This is the highest-value hour of security learning available to a normal person.',
  gear:['A password manager','An authenticator app or a hardware key'],
  steps:[
    'Get every account into a password manager with unique, generated passwords. Reuse is the single biggest real-world risk.',
    'Turn on two-factor authentication everywhere it is offered, preferring an app or a hardware key over SMS.',
    'Secure the accounts that can reset everything else — your email and your phone number — with the strongest protection available.',
    'Keep devices and browsers updated automatically. Most successful attacks use known, patched vulnerabilities.',
    'Learn to recognise phishing: check the actual sending domain, never act on urgency, and navigate to sites yourself rather than clicking links.',
    'Set up backups: three copies, two media, one offsite — and test that a restore actually works.'
  ],
  tips:[
    'Your email account is the master key to everything. Protect it accordingly.',
    'An untested backup is not a backup. Restore a file from it once.',
    'Check your addresses against a breach-notification service and change what has leaked.'
  ],
  proof:'Every account has a unique password, two-factor is on everywhere it can be, and you have restored a file from backup.'
},
{
  id:'password-managers', cat:'technology', name:'Learn how password managers work', time:'2–3 days', level:'Easy',
  blurb:'Understanding the model — one strong master password, a zero-knowledge encrypted vault, generated passwords for everything else — is what makes people actually trust and use one.',
  gear:['A reputable password manager','All your devices'],
  steps:[
    'Understand the architecture: your vault is encrypted locally with a key derived from your master password, so the provider cannot read it.',
    'Choose one and set a strong master password — a long passphrase you can remember but nobody could guess.',
    'Save the recovery kit or emergency code somewhere physically safe. Losing the master password usually means losing everything.',
    'Import your existing passwords, then use the built-in audit to find reused, weak and breached ones.',
    'Replace the worst offenders with generated passwords, starting with email, banking and anything holding payment details.',
    'Set up the browser extension and mobile app, and learn to store passkeys, secure notes and recovery codes too.'
  ],
  tips:[
    'The master password is the one you must never reuse anywhere else.',
    'Autofill only fills on the matching domain, which quietly protects you against phishing sites.',
    'Set up emergency access or a documented plan so someone can reach essential accounts if something happens to you.'
  ],
  proof:'Your whole household’s accounts are in a manager with unique passwords and no reuse warnings left.'
},
{
  id:'git-basics', cat:'technology', name:'Learn basic Git and version control', time:'2–4 weeks', level:'Moderate',
  blurb:'Commit, branch, merge, push. Git is confusing mainly because people learn the commands without the model — learn the model first and it becomes straightforward.',
  gear:['Git installed','A GitHub or GitLab account','A real project, even a folder of notes'],
  steps:[
    'Learn the model: working directory, staging area, local repository and remote. Almost every confusing Git moment is a question of which of these four you are in.',
    'Learn the daily loop: status, add, commit, push, pull — and write commit messages that explain why, not what.',
    'Learn branching and merging by working on a feature branch and merging it back.',
    'Learn to read history: log, diff and blame, which is where Git actually pays you back.',
    'Learn to resolve a merge conflict deliberately by creating one on purpose in a scratch repository.',
    'Learn the recovery commands — restore, revert, reflog — so mistakes stop being frightening.'
  ],
  tips:[
    'Commit early and often. Small commits are easier to understand and to undo.',
    'Never force-push to a shared branch. It rewrites history other people depend on.',
    'Almost nothing committed is ever truly lost. The reflog has rescued everyone at least once.'
  ],
  proof:'You manage a real project with branches, resolve a conflict calmly, and recover from a mistake using the reflog.'
}
]);
