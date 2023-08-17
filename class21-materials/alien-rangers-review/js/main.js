//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let showArray = ['showA', 'showB', 'showC']
showArray.forEach((show, index, array) => console.log(show, index, array))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Array

let nums = [21, 56, 67, 61, 50, 10]

let evensOnlyArray = (array) => array.filter(number => number % 2 === 0)
console.log(evensOnlyArray(nums))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
