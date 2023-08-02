//Create a conditonal that checks their age
//If under 16, tell them they can not drive
// const num = 15
// if (num < 16) {
//   console.log('you cannot drive')
// } else if (num < 18) {
//   console.log('you can\'t hate from outside the club, because they can\'t even get in')
// } else if (num < 21) {
//   console.log('you can\'t drink')
// } else if (num < 25) {
//   console.log('you can\'t rent a car affordably')
// } else if (num < 30) {
//   console.log('you can\'t rent a fancy car affordably')
// } else (num >= 30) {
//   console.log('you cshould just die')
// }
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
// const h1 = document.querySelector('h1')
// const p = document.querySelector('p')
// h1.addEventListener('click', checkAge)
// function checkAge() {


//   let num = Number(document.querySelector('input').value)
//   if (num < 16) {
//     p.innerText = `you cannot drive because you are ${num} years old`
//   } else if (num < 18) {
//     p.innerText = 'you can\'t hate from outside the club, because they can\'t even get in'
//   } else if (num < 21) {
//     p.innerText = 'you can\'t drink'
//   } else if (num < 25) {
//     p.innerText = 'you can\'t rent a car affordably'
//   } else if (num < 30) {
//     p.innerText = 'you can\'t rent a fancy car affordably'
//   } else {
//     p.innerText = 'you should just die'
//   }
// }

// const yell = (word, word2, number3) => {
//   alert(word)
//   alert(word2)
//   alert(number3)
// }

// yell('first word', 'second word', 3)

//Create a conditonal that checks their age

//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
const h1 = document.querySelector('h1')
const px = document.querySelector('p')
h1.addEventListener('click', checkAge)

function checkAge() {
let inputVal = Number(document.querySelector('input').value)
  if (inputVal<16) {
    px.innerText='you cant even drive'
  } else if (inputVal<=18) {
    px.innerText='you cant drink'
  } else if (inputVal<21) {
    px.innerText='you cant rent a car properly'
  } else {
    px.innerText='you are too old now'
  }
  
}





  



