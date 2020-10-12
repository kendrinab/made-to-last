const prompt = require(`readline-sync`);
var colors = require(`colors/safe`);

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

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

console.log(
  colors.debug(
    "\nMizra: Welcome to Made to Last! My name is Mizra, and I will your partner on this mission today!\n"
  )
),
  console.log(
    colors.debug(
      "Mizra: Lets hop into our spaceship, we've got lots of work to do!\n"
    )
  );
console.log(
  colors.brightYellow(
    `* Heading towards our mission, Mizra notices something *\n`
  )
);
console.log(
  colors.debug(
    "Mizra:' Uh oh... Looks like I forgot to refuel before we left.. heh.. whoops.. we might have to make a quick pit stop at our bestfriends station!... hehe sorry...\n"
  )
);

let userGuess = prompt.question(
  `"You've entered a planetary system that requires you to choose a class number 
  between 1 & ${maxRange} to get past the guards so we could get the doors where 
  the fuel is. Since you're running low on fuel, you must disguise yourself to 
   enter the correct door without being discovered to get fueled up" You have ${maxGuesses} 
        tries to guess which number will lead you to the correct door."
~ Choose a number from 1 - 10 to get past the guards to attain the fuel! ~ \n`
);

//Write a function that will take the user's guess as a
// 1. If they win !
// 2. If they lose :(
// 3. If they need to guess higher
// 4. If they need to guess lower

function handleGuess(userGuess) {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess == randomNumber) {
      console.log(
        colors.silly.underline(
          `You're good at this! Now let's get past the doors so we could get the fuel!\n`
        )
      );
      playAgain();
    } else if (guesses === maxGuesses - 1) {
      console.log(
        colors.error(
          `Oh no you've open the wrong door! It was Door ${randomNumber}, RUN!\n`
        )
      );
    } else if (userGuess > randomNumber) {
      console.log(colors.red.underline(`Think Again, Hurry!\n`));
      currentGuess++;
      console.log(`Guesses left: `, maxGuesses - currentGuess);
      userGuess = prompt.question(`Guess Again, Hurry before they find us! \n`);
    } else {
      console.log(colors.warn(`But it's not quite right! Let's try again!\n`));
      currentGuess++;
      console.log(`Guesses left: `, maxGuesses - currentGuess);
      newGuess = prompt.question(`Guess Again, Hurry before they find us! \n`);
    }
  }
}

handleGuess(userGuess);

//userGuess = prompt.keyInSelect(['DOOR1', 'DOOR2', 'DOOR3'], 'WHICH WOULD YOU CHOOSE?');
//if (userGuess === 0) {
//console.log(colors.verbose("A brave choice..."));
//handleGuess();
//} else if (userGuess === 1) {
//console.log("Oh well.. Maybe next time.");

//} else {
//console.log("CLEAR! LETS MOVE IT!");
//process.exit();
//}

const playAgain = () => {
  let playQuestion = prompt.question(
    `You still have time to get that fuel! Lets try again! y || n 
    \n`
  );
  if (playQuestion === `y`) {
    randomNumber = Math.floor(Math.random() * maxRange + 1);
    let newGuess = prompt.question(
      `"You've entered a planetary system that requires you to choose a class number 
      between 1 & ${maxRange} to get past the guards so we could get the doors where 
      the fuel is. Since you're running low on fuel, you must disguise yourself to enter 
      the correct door without being discovered to get fueled up" 
      You have ${maxGuesses} tries to guess which number will lead you to the correct door."
    \n~ Choose a number from 1 - 10 to get past the guards to attain the fuel! ~ \n`
    );
    currentGuess = 0;
    guesses = 0;
    handleGuess(newGuess);
  } else {
    console.log(`At least you tried! \n'Til next Mission!`);
  }
};

playAgain();
