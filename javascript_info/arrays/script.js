// // let arr = ['john', 120, {name: 'john', title:'worker'}, function hello(){alert('herro')} ]

// // alert(arr[2].name + ' ' + arr[2].title)

// // ////////////////////////////

// // let fruits = ["Apple", "Orange", "Plum"];

// // // same as fruits[fruits.length-1]
// // alert( fruits.at(-1) )

// ////////////////////////////

// // let cars = ['BMW', 'Audi','Mercedes','VW']

// // for (let i = 0; i < array.length; i++) {
// //   alert(cars[i])

// // }

// // ///////////////////////////////////////

// // let matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ];

// // alert( matrix[1][1] ); // 5, the central element

// /////////////////////////////////////

// // let styles = ['Jazz', 'Blues']

// // styles.push('Rock-n-Roll')

// // styles[1] = 'Classics' // || styles[Math.floor((styles.length - 1) / 2)] = "Classics";

// // alert(styles.shift())

// // styles.unshift('Rap', 'Raggae')

// // alert(styles)

// // Create an array styles with items “Jazz” and “Blues”.
// // Append “Rock-n-Roll” to the end.
// // Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// // Strip off the first value of the array and show it.
// // Prepend Rap and Reggae to the array.

// //////////////////////////////////////////

// // function sumInput() {
// //   let val1 = +prompt('input first value')
// //   let val2 = +prompt('input second value')

// //   let arr = [val1,val2]
// //   console.log(arr)

// //   return alert(val1 + val2)
// // }

// // sumInput()

// ////////////////////////////////////////////

// //  let sumInput2 = function() {
// //   let arr = []
// //   while (true) {
// //     let value = prompt('please enter a number')
// //     if (value === '' || value === null || value === undefined) {
// //       break
// //     }
// //     arr.push(+value)
// //   }
// //   let sum = 0
// //   for (let i = 0; i < arr.length; i++) {
// //     sum +=arr[i]
// //   }
// //   return sum
// // }
// // alert(sumInput2())

// /////////////////////////////////////////////
// // function sumInput() {

// //   let numbers = [];

// //   while (true) {

// //     let value = prompt("A number please?", 0);

// //     // should we cancel?
// //     if (value === "" || value === null || !isFinite(value)) break;

// //     numbers.push(+value);
// //     alert(numbers)
// //   }

// //   let sum = 0;
// //   for (let number of numbers) {
// //     sum += number;
// //   }
// //   return sum;
// // }

// // alert(sumInput());

// ////////////////////////////////////////////////

// // function getMaxSubSum(arr) {
// //   let maxSum = 0;
// //   let partialSum = 0;

// //   for (let item of arr) { // for each item of arr
// //     partialSum += item; // add it to partialSum
// //     maxSum = Math.max(maxSum, partialSum); // remember the maximum
// //     if (partialSum < 0) partialSum = 0; // zero if negative
// //   }

// //   return maxSum;
// // }

// // alert(getMaxSubSum([-1, 2, 3, -9])); // 5

// let subSum = function (array) {
//   let sumMax = 0
//   let sumPartial = 0
//   for (let i = 0; i < array.length; i++) {
//     sumPartial += array[i]
//     sumMax = Math.max(sumMax, sumPartial)
//     if (sumPartial < 0) {
//       sumPartial = 0
//     }
//   }
//   return sumMax
// }

// alert(subSum([-10, -9, 200, 100]))

// //////////////////////////////////////


// function camelized(str) {

//   return str.split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// }

// camelized('my-long-word')

// /////////////////////////////////////

// // splits 'my-long-word' into array ['my', 'long', 'word']
// // capitalizes first letters of all array items except the first one
// // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word'] = map
// // joins ['my', 'Long', 'Word'] into 'myLongWord'

// const camelizer = str =>
//   str.split('-')
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')

// camelizer('my-long-word')

// //////////////////////////////////////

// function filterRange(arr, var1, var2) {
//   let filtered = arr.filter(num => num >= var1 && num <= var2)
//   return filtered
// }
// alert(filterRange([1, 2, 3, 4, 5, 6], 1, 4))

// /////////////////////////////////////

// function filterRangeInPlace(arr, var1, var2) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i]
//     if (val < var1 || val > var2) {
//       arr.splice(i, 1)
//       i--
//     }
//   }
// }
// let arr = [1,2,3,4,5]
// filterRangeInPlace(arr,1,4)
// alert(arr)

// ////////////////////////////////////

// function sortArr(arr) {
//   return arr.sort((a,b) => b-a)
// }

// alert(sortArr([1,2,3,4,5]))

// ///////////////////////////////////

// let arr2 = ['c','b','a']
// let sorted = copySorted(arr2)

// function copySorted(arr2) {
//   return arr2.slice().sort()
// }

// alert(sorted)

// ///////////////////////////////////

// // let john = { name: "John", surname: "Smith", id: 1 };
// // let pete = { name: "Pete", surname: "Hunt", id: 2 };
// // let mary = { name: "Mary", surname: "Key", id: 3 };

// // let users = [ john, pete, mary ];

// // let usersMapped = users.map(user => ({
// //   fullName: `${user.name} ${user.surname}`,
// //   id: user.id
// // }))

// // alert(usersMapped[0])

// //////////////////////////////////

// // let john = { name: "John", age: 25 };
// // let pete = { name: "Pete", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr3 = [ pete, john, mary ];

// // function sortByAge(arr3) {
// //   arr3.sort((a,b) => a.age - b.age)
// // }

// // sortByAge(arr3);

// // //////////////////////////////////

// // let arr4 = ['phil','spence','aron']

// // let arrShuffle = function (arr4) {
// //  return arr4.sort(0.4)

// // }

// // console.log(arrShuffle(arr4))

// /////////////////////////////////

// let john = { name: 'John', age: 30}
// let spence = { name: 'Spence', age: 29}
// let phil = { name: 'Phil', age: 94}

// let arr = [john,spence,phil]

// function getAvgAge(users) {
//   const initialVal = 0
//   return users.reduce((acc,user) => acc+user.age, initialVal)/users.length
// }

// console.log(getAvgAge(arr))

////////////////////////////////////////

// function unique(arr) {
//   let result = []
//   for (let str of arr){
//     if (!result.includes(str)) {
//       result.push(str)
//     }
//   }
//   return result
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

/////////////////////////////////////////

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.name] = value
    return obj
  }, {})
}

let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

////////////////////////////////////////////

let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

create_random = {
  min: -1,
  max: 90,
  length: 100,
};

create_random[Symbol.iterator] = function () {
  return {
    start: 0,
    min: this.min,
    max: this.max,
    length: this.length,
    next() {
      this.start++;
      return this.start < this.length ? { done: false, value: randint(this.min, this.max) } : { done: true };
    }
  };
};

let array = Array.from(create_random);
console.log(array);