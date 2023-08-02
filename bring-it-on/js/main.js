// *Variables*
// Create a variable and console log the value
var n1 = 'hello'
console.log(n1)
// Create a variable, add 10 to it, and alert the value
var d1 = 1
d1+=10
alert(d1)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(n1,n2,n3,n4){
 alert(n1-n2-n3-n4)
}
subtract(5,1,1,1)
// Create a function that divides one number by another and returns the remainder
function divide(n1,n2){
  return(n1%n2)
}
divide(6,2)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(n1,n2){
  if (n1+n2<50) {
    alert('Schnitzel is healthy')
  } else if(n1+n2>50) {
    alert('Jumanji')
  }
}
addTwo(25,26)
// TEACHER ANSWER, BETTER SOLUTION

function twoAdd(n1,n2){
  let sum = n1+n2 
  if (sum>50) {
    alert('Jumanji')
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1,n2,n3){
  if ((n1*n2*n3)%3===1) {
    alert('Lion')
  }
  if ((n1*n2*n3)%3===2) {
    alert('Tiger')
  }
  if ((n1*n2*n3)%3===0) {
    alert('ZEBRA')
  }
}
multiplyThree(14,23,4)

// TEACHER SOLUTION, BETTER

function multiplyThreeTeacher(n1,n2,n3){
  let product = (n1*n2*n3) 
    if (product % 3 === 0 ) {
      alert('ZEBRA')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word,n1){
  for(x=1;x<n1;x++){
    console.log(word)
  }
}
wordNumber('SchnitzelMeister', 5)
// *Variables*
// Create a variable and console log the value
var n1 = 10
console.log(n1)
// Create a variable, add 10 to it, and alert the value
var n2 = 10
n2 += 20
alert(n2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(n1,n2,n3,n4) {
  alert(n1-n2-n3-n4)
}
subtract(5,1,1,1)
// Create a function that divides one number by another and returns the remainder
function divide(n1,n2) {
  return(n1%n3)
}
divide(3,1)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumTwo(n1,n2) {
  let sum = n1+n2
  if (sum>50) {
    alert(Jumanji)
  } 
}
sumTwo(29,20)
// TEACHER ANSWER, BETTER SOLUTION


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1,n2,n3){
  let product = (n1*n2*n3) 
  if (product%3 === 0) {
    alert('zebra')
  } else {
    alert('wiener')
  }
}

multiplyThree(3,4,6)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordNumber(word,number) {
  for (let x = 1; x < number; x++) {
    console.log(word)
    
  }
}
loopWordNumber('word', 3)