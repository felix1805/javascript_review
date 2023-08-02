// //---Easy
// //create a function that subtracts two numbers and alerts the difference
// const subtract = (num1, num2) => {
//   const result = num1 - num2
//   alert(result)
// }
// subtract(154, 20)
// //create a function that divides three numbers and console logs the quotient
// const division = (num1, num2, num3) => {
//   const result = num1 / num2 / num3
//   alert(result)
// }
// division(60, 2, 3)
// //create a function that multiplys three numbers and returns the product
// const multiply = (num1, num2, num3) => {
//   const result = num1 * num2 * num3
//   alert(result)
// }
// multiply(20, 30, 50)
// //---Medium
// //create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const complex = (num1, num2, num3) => {
  const result = (num1 + num2) % num3
  alert(result)
}
complex(12, 4, 3)

function complex2(n1,n2,n3){
 
  const result =  (n1+n2)*n3
  console.log(result)
}
complex2(35,35,1)

function complex3(n1,n2,n3){
  return(n1+n2+n3)
}
console.log(complex3(1,2,3))



//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

const complex4 = (num1, num2, num3, num4) => {
  const result1 = num1 * num2
  const result2 = result1 - (num3 - num4)
  const result3 = num1 * num2 * num3
  if (result1 > 100) {
    console.log("case 1", result1 + (num3 + num4))
  } else if (result1 < 100) {
    console.log("case 2", result2)
  } else if (result1 == 100) {
    console.log("case 3", result3 % num4)
  } else {
    console.log("none of the cases match the result")
  }
}

complex4(7, 25, 7, 4)

// TEACHER SOLUTION

function teacherSolution(n1,n2,n3,n4) {
  let product = n1 * n2
  if(product>100){
    console.log('teachersolution',product +n3+n4)
  } else if(product < 100){
    console.log('teachersolution',product -n3-n4)
  } else {
    alert((n1*n2*n3) % n4)
  }
}

teacherSolution(5,4,3,2)