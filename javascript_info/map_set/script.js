// let vehicleMap = new Map([
//   ['BMW', 325],
//   ['Audi', 'S4'],
//   ['Mercedes', 'C300']
// ])
// vehicleMap.forEach((val, key, map) => {
//   console.log(`${key}: ${val}`)
// })
// ///////////////////////

// let users = new Set()

// let bill = { name: 'Bill', age: 33, props: [12, 33, 33, 44] }
// let jim = { name: 'Jim' }
// let john = { name: 'John' }

// users.add(bill)
// users.add(bill)
// users.add(john)
// users.add(john)
// users.add(jim)
// users.add(john)
// users.add(john)

// for (let user of users) {
//   console.log(user.name)
// }
// console.log(users.size)
// /////////////////////////

// let cars = new Map()

// cars.set('1', 'BMW')
// cars.set('2', 'Mercedes')
// cars.set('3', 'VW')

// console.log(cars)

// cars.forEach((value, key, map) => {
//   console.log(`${key}: ${value} is the car selected`)
// })

// ////////////////////////

// function unique(arr) {

//   return Array.from(new Set(arr));

// }


// let values = ["Butter", "Sauce", "Butter", "Chicken",
//   "Butter", "Beans", "Sauce", "Sauce", ":-O"
// ];



// console.log(unique(values));


// ///////////////////////


// function sumSalaries(salaries) {
//   let sum = 0
//   for (let salary of Object.values(salaries)) {
//     sum += salary
//   }
//   return sum
// }

// let salaries = {
//   'john': 300,
//   'bill': 400,
//   'mary': 400
// }
// console.log(sumSalaries(salaries))

// function countObj(salaries) {
//   return Object.keys(salaries).length
// }

// console.log(countObj(salaries))

////////////////////////////////

// let user = {
//   name: 'Felix',
//   surName: 'Petzsche'
// }

// let {name, surName} = user
// function ageMod(inputVal) {
// user.age = +prompt('please specify original user age')
// let newAge = user.age + inputVal
// user.age = newAge
// return newAge
// }
// ageMod(43)


// let results = user
// console.log(results)

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
// console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student)
let jsonParse = JSON.parse(json)

console.log(student)
console.log(json)
console.log(jsonParse)

let arr = [
  'Jim',
  'Bill',
  30,
  'Phil',
]
let arrJson = JSON.stringify(arr)
console.log(arr)
console.log(arrJson)

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

let meetupJSON = JSON.stringify(meetup)

console.log(meetupJSON)