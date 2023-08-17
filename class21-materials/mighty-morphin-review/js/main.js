// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'christmas'
holiday = holiday.toUpperCase()
console.log(holiday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let vari = 'schnitzel'
alert(vari.slice(3, -3)) //FIRST THREE AND LAST THREE LETTERS IN THIS CASE
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absValue(n1, n2, n3, n4, n5, n6) {
  let product = 100
  product = product - n1 - n2 - n3 - n4 - n5 - n6
  alert(Math.abs(product))
}
absValue(45,23,56,25,12,12)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function minMax(n1,n2,n3,n4){
  let min = (Math.min(n1,n2,n3,n4))
  let max = (Math.max(n1,n2,n3,n4))
  alert(`This minimum value is ${min} and the maximum value is ${max}`)
}
minMax(124,34687,74376,2789)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headOrTails() {
//   let result = Math.random()
//   if (result < 0.5) {
//    return 'tails'
//   } else {
//     return 'heads'
//   }
// }
// headOrTails()

// OR IN ONE LINE AS ARROW FUNCTION (USING IMPLICIT RETURN (DOES NOT NEED RETURN)):

const headOrTails = () => Math.random() <0.5? 'tails' : 'heads'

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function xTimes(num){
  for (let i = 1; i <= num; i++) {
    let result = headOrTails()
    console.log(result)
  }
}
xTimes(10)