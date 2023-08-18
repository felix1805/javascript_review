// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = '         +++++water  '
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let str = 'pear peach banana pinapple apple'
if (str.search('apple') !== -1) {
  console.log('the string being searched for is present')
} else {
  console.log('string not found')
}

//returns the index position of the start of the word apple (returns '-1' if string is not found)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let probability = Math.random()
  if (probability < 0.33) {
    return('rock')
  } else if (probability < 0.66) {
    return('paper')
  } else {
    return('scissors')
  }
}
// rockPaperScissors()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function botVsYou(playerChoice) {
  let botChoice = rockPaperScissors()
  if (playerChoice === 'rock' && botChoice === 'paper' || playerChoice === 'paper' && botChoice === 'scissors' || playerChoice === 'scissors' && botChoice === 'rock') {
    console.log('You Lost')
  } else if (playerChoice === 'rock' && botChoice === 'scissors' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissors' && botChoice === 'paper') {
    console.log('You Won')
  } else {
    console.log('You Tied')
  }
}
botVsYou('paper')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
