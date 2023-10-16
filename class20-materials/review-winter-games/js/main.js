//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// function newArray(array){
//   let newArray = []
//   array.forEach(num => {
//     if (num%2===0) {
//       newArray.push(num)
//     }
//   })
//   return newArray
// }
// console.log(newArray([12,14,3,4,6,5]))

function newArrayFunction(array){
  let newArray = []
  array.forEach(element => {
    if (element%2 === 0) {
      newArray.push(element)
    }
  });
  alert(newArray)
}
newArrayFunction([1,3,5,6,7,8,9,10])