//--- Easy
//create a variable and assign it a number
var num = 15
//minus 10 from that number
var num = num - 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let varFromInput = Number(document.querySelector('#danceDanceRevolution').value)
let varFromInput2 = Number(document.getElementById('danceDanceRevolution').value)
//add 25 to that number
let varFromInput3 = varFromInput2 + 25
//alert that number
console.log(varFromInput3)
console.log(varFromInput2)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
const h1x = document.getElementById('h1')
//add an event listener to that element that console logs the sum of the two previous variables
console.log('this is h1',h1, h1x)

const sumOfNum = () => {
  console.log(num + varFromInput)
}
h1.addEventListener('click', sumOfNum)

// or

h1.addEventListener('click', sumOfNum2)

function sumOfNum2() {
  console.log(num+varFromInput3)
}

2:37:11

3:30:00 + 38 networking related advice, template for resume anki? notecards (https://apps.ankiweb.net/)

node backend work should be next video after javascript lesson

5:07:53