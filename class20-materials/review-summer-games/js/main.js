//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function arrayMultiply(array) {
  let product = 1
  array.forEach(num => product *= num)
  // OR
  // for (let i = 0; i < array.length; i++) {
  //   product *= array[i]
  //   console.log(array[i])
  // }
   alert(product)
}
arrayMultiply([2, 3, 4, 5])


let testArray = [1,2,3,4,5]
let removedElement = testArray[3]
alert(removedElement)