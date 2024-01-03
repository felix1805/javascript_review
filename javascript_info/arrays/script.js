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

function sumInput() {
  let val1 = +prompt('input first value')
  let val2 = +prompt('input second value')

  let arr = [val1,val2]
  console.log(arr)

  return alert(val1 + val2)
}

sumInput()