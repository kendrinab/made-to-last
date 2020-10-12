const prompt = require(`readline-sync`);
var colors = require(`colors/safe`);

doors = [" DOOR 1", " DOOR 2", "DOOR 3"]

//const doors

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

//const maxGuessest = 3;
//let currentGuesst = 0;
//const maxRanget = 10;

let randomNumber = Math.floor(Math.random() * maxRange + 1);

colors.setTheme({
  silly: "rainbow",
  input: "blue",
  verbose: "cyan",
  prompt: "blue",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});
console.log("\n");
console.log(
  colors.debug(
    "MIZRA: WELCOME TO MADE TO LAST... MY NAME IS MIZRA & I WILL BE YOUR VOIDWALKER ON THIS MISSION TODAY"
  )
);
console.log("\n");
console.log(
  colors.debug(
    "MIZRA: LET'S HOP INTO OUR SPACESHIP, WE'VE GOT LOTS OF WORK TO DO!"
  )
);
console.log("\n\n");
console.log(
  colors.brightYellow(
    `* HEADING TOWARDS OUR MISSION... MIZRA NOTICES SOMETHING *\n`
  )
);
console.log("\n\n");
console.log(
  colors.debug(
    "MIZRA: UH OH... I FORGOT TO REFUEL BEFORE WE LEFT... HEH.. WHOOPS... *SIGHS* LOOKS LIKE WE HAVE TO MAKE OUR PIT STOP IN THIS SYSTEM... READY TO SAY HI TO OUR BEST FRIENDS?\n"
  )
);
console.log("\n\n");
let pGuess = prompt.question(
  `"YOU'VE ENTERED A PLANETARY SYSTEM THAT REQUIRES YOU TO CHOOSE A CLASS LANE 
  BETWEEN 1 & ${maxRange} TO GET PAST THE GUARDS SO WE COULD GET THE DOORS WHERE 
  THE FUEL IS. SINCE YOU'RE RUNNING LOW ON FUEL, YOU MUST DISGUISE YOURSELF TO 
   ENTER THE CORRECT DOOR WITHOUT BEING DISCOVERED TO GET FUELED UP" YOU HAVE ${maxGuesses} 
        TRIES TO GUESS WHICH LANE WILL LEAD YOU TO THE CORRECT DOOR."
~ CHOOSE A NUMBER FROM 1 - 10 TO GET PAST THE GUARDS TO ATTAIN THE FUEL! ~ \n`
);


const handleGuess = (pGuess) => {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (pGuess == randomNumber) {
      console.log(
        colors.rainbow(
          `YOU'RE GOOD AT THIS! NOW LET'S GET PAST THE DOORS SO WE COULD GET THE FUEL!\n`
        )
      );

    } else if (guesses === maxGuesses - 1) {
      console.log(
        colors.red.underline(
          `OH NO! YOU PICKED THE WRONG ONE! \n   IT WAS LANE ${randomNumber}, RUN!\n`
        )
      );
      playAgain();
    } else if (pGuess > randomNumber) {
      think("lower\n");
      console.log(colors.red.underline(`THINK AGAIN, HURRY!`));
      currentGuess++;
      console.log(`Guesses left: `, maxGuesses - currentGuess);
      pGuess = prompt.question(`\nGUESS AGAIN OR WE'RE GONNA BE TOAST!!\n`);
    } else {
      think("higher\n");
      console.log(colors.red.underline(`Not quite right! Let's try again!`));
      currentGuess++;
      console.log(`Guesses left: `, maxGuesses - currentGuess);
      pGuess = prompt.question(`\nGUESS AGAIN OR WE'RE GONNA BE TOAST!!\n`);
    }
  }
};

const think = (direction) => {
  console.log(`Think ${direction}`);
  currentGuess++;
  console.log("Guesses Left: ", maxGuesses - currentGuess);
};

function playAgain() {
  let playQuestion = prompt.question(
    `YOU STILL HAVE TIME TO GET THAT FUEL.. DON'T GIVE UP NOW! LETS TRY AGAIN! y || n \n`
  );
  //playAgain = playAgain.toLowerCase();

  if (playQuestion === `y`) {
    randomNumber = Math.floor(Math.random() * maxRange + 1);
    let newGuess = prompt.question(
      `"YOU'VE ENTERED A PLANETARY SYSTEM THAT REQUIRES YOU TO CHOOSE A CLASS LANE 
      BETWEEN 1 & ${maxRange} TO GET PAST THE GUARDS SO WE COULD GET THE DOORS WHERE 
      THE FUEL IS. SINCE YOU'RE RUNNING LOW ON FUEL, YOU MUST DISGUISE YOURSELF TO 
       ENTER THE CORRECT DOOR WITHOUT BEING DISCOVERED TO GET FUELED UP" YOU HAVE ${maxGuesses} 
            TRIES TO GUESS WHICH LANE WILL LEAD YOU TO THE CORRECT DOOR."
    \n\n~ CHOOSE A NUMBER FROM 1 - 10 TO GET PAST THE GUARDS TO ATTAIN THE FUEL! ~ \n\n`
    );
    currentGuess = 0;
    guesses = 0;
    handleGuess(newGuess);
  } else {
    console.log(`AT LEAST YOU TRIED \n'TIL NEXT MISSION, NEXT PLANET!`);
  }
}

//console.log("THAT WAS PRETTY IMPRESSIVE.. NOW LETS HOPE YOU HAVE THE SAME LUCK CHOOSING THE RIGHT DOOR");

//pGuesst = prompt.keyInSelect(['DOOR1', 'DOOR2', 'DOOR3'], 'WHICH WOULD YOU CHOOSE?');
//if (pGuesst === 0) {
//console.log(colors.verbose("A brave choice..."));
//handleGuess();
//} else if (pGuesst === 1) {
//console.log("Oh well.. Maybe next time.");

//} else {
//console.log("CLEAR! LETS MOVE IT!");
//process.exit();
//}
handleGuess(pGuess);