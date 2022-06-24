# Court Case Randomizer

This program creates randomized versions of a court case. It has a variety of crimes, punishments, guilty/not guilty verdicts, etc.

Artist Statement: The effect I was trying to achieve was to have a variety of bizarre court cases, but I wanted them to at least follow some logic. I was relatively successful in creating bizarre cases, but ran into some instances of contradictions. For instance, the lawyer could say his defendent was guilty (which in itself is a contradiction to reality, but this was a design choice), but then could say something sympathetic towards the defendent. This was a difficulty I had with connecting past randomly chosen words with current randomly chosen words. I ended up rephrasing things so no matter the past decisions it would still partially make sense. Though a better way to do this might be to have a variable keeping track of the context that the previous random words/phrases created.

NOTE: The level of complexity I added to the replacement was replacing chunks on two different lines by utilizing /n. This let me have one random selection influence two lines at the same time, but it could only be done at the ends and beginnings of lines.

Credit: Adam Smith
