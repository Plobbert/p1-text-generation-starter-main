const fillers = {
    accusing: ["John", "Barney", "Mickey Mouse", "Bob Ross", "The Backstreet Boys", "joe", "Pennywise", "$genericName Nye the $schoolSubject Guy", "Canada", "Mars", "$genericName and $genericName", "$genericName of planet $planets", "Geoff"],
    defending: ["Goofy", "a tree", "Heimlich", "Gary the Ogre", "Batman", "Winnie the Pooh"],
    genericName: ["Bill", "Steve", "Peter", "Robert", "Billy", "Larry", "David", "Tyler", "Cody", "Wesley"],
    schoolSubject: ["Math", "Science", "English", "History", "P.E.", "Art", "Quantum Physics"],
    time: ["morning", "afternoon", "evening"],
    absurdTypeWord: ["outrageous", "despicable", "utterly absurd", "wicked", "totally gnarley", "horrifying"],
    notOrIndeed: ["not", "indeed"],
    crime: ["commit tax fraud", "jaywalk", "set the entirety of Canada on fire", "rob a hot dog stand of its mustard", "hatch millions of frog eggs in a suburban neighborhood, causing massive ecological damage to the area"],
    proposition: ["think hard about this decision, my client's life rests in your hands.", "make this quick, I have a date in thirty minutes.", "take as long as you need. My client and I eagerly await your decision."],
    guiltyStatus: ["guilty! \n\n  Alrighty then,", "not guilty! \n\n Well y'all are wrong!"],
    planets: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto... but sir, Pluto isn't a plan- SHUSH! IT IS TO ME! Anyways..."],
    courtType: ["Stinky", "Superior", "Strange", "Sus", "Superstitious", "Supremely Overrated"],
    name: ["Williams", "Squilliam Fancyson", "Squarepants", "Lebron James"],
    num: ["zero", "three", "eleven", "five-thousand", "negative fifteen"],
    vagueNumbers: ["$num", "a tiny amount of", "less than two", "A MASSIVE AMOUNT OF", "an infinite amount of"],
    timeUnits: ["seconds", "minutes", "hours", "days", "weeks", "months", "years", "decades", "centuries", "millenia"],
    people: ["citizens", "noobs", "humans"],
    punishment: ["listening to the barney theme song", "not eating pizza", "having a warm pillow", "having the hiccups", "being chased by an unkillable snail that will kill you the second it touches you"]

    
  };
  
  const template = `All rise. Department $num of the $courtType Court is now in session. Judge $name presiding. Please be seated.
  
  Good $time, $people. Calling the case of $accusing versus $defending. Are both sides ready?
  
  Yatta Yatta Yatta skipping a few parts
  
  Your honor, this is $absurdTypeWord! My client did $notOrIndeed $crime! Only a fool would think otherwise. To the jury, I ask that you $proposition.
  
  A few $timeUnits later...
  
  We the jury find the defendent... $guiltyStatus I hereby sentence you to $vagueNumbers $timeUnits of $punishment.
  
  Case dismissed!
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
