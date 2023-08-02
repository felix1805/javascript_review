//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenNumberArray(array) {
  let evenNums = []
  array.forEach(num => {
    if (num % 2 === 0) {
      evenNums.push(num)
    }
  })
  return (evenNums)
}
console.log(evenNumberArray([1, 2, 3, 4, 5, 6]))



function numbsArrayEven(array) {
  return (array.filter(num => num % 2 === 0))
}

console.log(numbsArrayEven([12, 54, 6, 7, 7]))

function evenArrayNumbs(array) {
  let evenArray = []
  array.forEach(num => {
    if (num%2===0) {
      evenArray.push(num)
    }
  })
  return(evenArray)
}
console.log(evenArrayNumbs([1,2,4,6,8,9,50]))



function numbsAreEven(array) {
  return(array.filter(num => num%2==0))
}

function evenArray2(array) {
 let eArray = []
  array.foreach(num => {
    if (num%2===0) {
      eArray.push(num)
    }
  })
  return(eArray)
}
console.log(evenArray2([12,356,7,8]))







