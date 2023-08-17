//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function newArray(array){
  let newArray = []
  array.forEach(num => {
    if (num%2===0) {
      newArray.push(num)
    }
  })
  return newArray
}
console.log(newArray([12,14,3,4,6,5]))