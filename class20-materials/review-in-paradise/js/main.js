// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let feed = 'pizza'
feed = 'spaghetti'
alert(feed)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'hello world'
alert(str[1])
// OR
alert(str.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function alert3(n1, n2, n3) {
  let product = (n1 / n2) * n3
  alert(product)
}
alert3(6, 2, 2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1) {
  console.log(Math.cbrt(n1).toFixed(4))
  //TOFIXED REDUCES TO A SPECIFIED DECIMAL PLACE
}
cubeRoot(12)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkSummer(month) {
  let monthToLowerCase = month.toLowerCase()
  if (monthToLowerCase === 'june' || monthToLowerCase === 'july' || monthToLowerCase === 'august') {
    alert('yay')
  } else {
    alert('boo')
  }
}
checkSummer('september')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function multiply5(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 5 !== 0) {
      console.log(i)
    }
  }
}
multiply5(45)