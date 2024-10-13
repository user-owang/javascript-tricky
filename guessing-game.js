function guessingGame() {
  const correctNumber = Math.floor(Math.random() * 100);
  let isOver = false;
  let guesses = 0;
  return function (guess) {
    if (isOver) {
      return "The game is over, you already won!";
    } else {
      guesses++;
      if (guess > correctNumber) {
        return `${guess} is too high!`;
      }
      if (guess < correctNumber) {
        return `${guess} is too low!`;
      }
      if (guess > correctNumber) {
        isOver = true;
        return `You win! You found ${correctNumber} in ${guesses} guesses.`;
      }
    }
  };
}

module.exports = { guessingGame };
