//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let numArray = [1,2,3,4,5]
function sumArray(array) {
  let sum = 0
  array.forEach(element => {
    sum += element

  })
  alert(sum)
}
sumArray([1, 2, 3, 4, 5])

//TEACHER SOLUTION IMPORTANT REVIEW!!!

let nums = [12, 57, 25, 945, 1]
let sum = nums.reduce((acc, c) => acc + +c, 0)
alert(sum)

//REVIEW => '+' SIGN INFRONT OF 'C' IS SHORTHAND FOR USING THE 'NUMBER' PROPERTY, IN THIS CASE IT SPECIFIES THAT THE INPUT VALUES ARE GOING TO BE CONSIDERED AS A NUMBER, EVEN WHEN PASSING IN A NUMBER AS A STRING VALUE, FOR EXAMPLE.
// REDUCE METHOD CAN BE USED TO ADD, MULTIPLY, DEVIDE OR SUBTRACT, IF USING MULTIPLICATION, MAKE SURE TO CHANGE 0 TO 1, OTHERWISE ANSWER WILL REMAIN 0 RATHER THAN ACCUMULATING. 


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
