// let arr = ['john', 120, {name: 'john', title:'worker'}, function hello(){alert('herro')} ]

// alert(arr[2].name + ' ' + arr[2].title)

// ////////////////////////////

// let fruits = ["Apple", "Orange", "Plum"];

// // same as fruits[fruits.length-1]
// alert( fruits.at(-1) )

////////////////////////////

// let cars = ['BMW', 'Audi','Mercedes','VW']

// for (let i = 0; i < array.length; i++) {
//   alert(cars[i])

// }

// ///////////////////////////////////////

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// alert( matrix[1][1] ); // 5, the central element

/////////////////////////////////////

// let styles = ['Jazz', 'Blues']

// styles.push('Rock-n-Roll')

// styles[1] = 'Classics' // || styles[Math.floor((styles.length - 1) / 2)] = "Classics";

// alert(styles.shift())

// styles.unshift('Rap', 'Raggae')

// alert(styles)

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

//////////////////////////////////////////

// function sumInput() {
//   let val1 = +prompt('input first value')
//   let val2 = +prompt('input second value')

//   let arr = [val1,val2]
//   console.log(arr)

//   return alert(val1 + val2)
// }

// sumInput()

////////////////////////////////////////////

//  let sumInput2 = function() {
//   let arr = []
//   while (true) {
//     let value = prompt('please enter a number')
//     if (value === '' || value === null || value === undefined) {
//       break
//     }
//     arr.push(+value)
//   }
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum +=arr[i]
//   }
//   return sum
// }
// alert(sumInput2())

/////////////////////////////////////////////
// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("A number please?", 0);

//     // should we cancel?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//     alert(numbers)
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());

////////////////////////////////////////////////

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }

//   return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9])); // 5

let subSum = function (array) {
  let sumMax = 0
  let sumPartial = 0
  for (let i = 0; i < array.length; i++) {
    sumPartial += array[i]
    sumMax = Math.max(sumMax, sumPartial)
    if (sumPartial < 0) {
      sumPartial = 0
    }
  }
  return sumMax
}

alert(subSum([-10,-9,200, 100]))