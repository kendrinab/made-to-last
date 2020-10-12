const prompt = require(`readline-sync`);
var colors = require(`colors/safe`);

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

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

const randomNumber = Math.floor(Math.random() * maxRange + 1);

console.log(colors.debug("Mizra: Welcome to Made to Last!"));
console.log(
  colors.debug(
    "Mizra: 'Lets hop into our spaceship, we've got lots of work to do!'"
  )
);

console.log(
  colors.error(
    "Mizra: 'Uh oh... Looks like I forgot to refuel before we left.. heh.. whoops.. we might have to make a quit pit stop at our bestfriends station!... hehe sorry..."
  )
);

let userGuess = prompt.question(
  `"You've entered a planetary system that requires you to choose a class number 
   between 1 & ${maxRange} to get past the guards, since your spaceship is running 
   low on fuel, you must disguise yourself to enter the correct door without being 
   discovered to get feuled up" You have ${maxGuesses} tries to guess which number 
                     will lead you to the correct door.\n`
);

console.log(
  colors.inverse.underline(
    "Choose your number of choice to get past the guards so we could get the fuel."
  )
);
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

//Write a function that will take the user's guess as a

// 1. If they win !
// 2. If they lose :(
// 3. If they need to guess higher ^
// 4. If they need to guess lower

function handleGuess(userGuess) {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess == randomNumber) {
      console.log(
        colors.rainbow(`You're good at this! Now let's get that fuel going before 
        they realize you're trespassing!`)
      );
      playAgain();
    } else if (guesses === maxGuesses - 1) {
      console.log(
        `Oh no you've open the wrong door! It was Door ${randomNumber}, RUN!`
      );
    } else if (userGuess > randomNumber) {
      console.log(`Think Again, Hurry!`);
      currentGuess++;
      console.log(`Doors left: `, maxGuesses - currentGuess);
      userGuess = prompt.question(`Guess Again, Hurry before they find us! \n`);
    } else {
      console.log(colors.warn(`But it's not quite right! Let's try again!`));
      currentGuess++;
      console.log(`Doors left: `, maxGuesses - currentGuess);
      newGuess = prompt.question(`Guess Again, Hurry before they find us! \n`);
    }
  }
}

handleGuess(userGuess);

const playAgain = () => {
  let playQuestion = prompt.question(
    `You still have time to get that feul! Lets try again! y || n \n`
  );
  playAgain = playAgain.toLowerCase();
  if (playQuestion === "y") {
    const randomNumber = Math.floor(Math.random() * maxRange + 1);
  }
};

playAgain();
