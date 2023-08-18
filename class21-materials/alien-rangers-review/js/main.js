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
function sumSecondHighAndLow(array){
let sortedArray = array.sort((a,b) => a-b)
alert(sortedArray[1] + sortedArray[sortedArray.length - 2])
console.log(sortedArray)
}
sumSecondHighAndLow([1,1,2,4,7,3,8,9])

function sortArray(array){
  let sort = array.sort()
  console.log(sort)
}
sortArray(['xhateverthename','bill', 'john','willz','willy','james'])