let vehicleMap = new Map([
  ['BMW', 325],
  ['Audi', 'S4'],
  ['Mercedes', 'C300']
])
vehicleMap.forEach((val, key, map) => {
  console.log(`${key}: ${val}`)
})
///////////////////////

let users = new Set()

let bill = { name: 'Bill', age: 33, props: [12, 33, 33, 44] }
let jim = { name: 'Jim' }
let john = { name: 'John' }

users.add(bill)
users.add(bill)
users.add(john)
users.add(john)
users.add(jim)
users.add(john)
users.add(john)

for (let user of users) {
  console.log(user.name)
}
console.log(users.size)
/////////////////////////

let cars = new Map()

cars.set('1', 'BMW')
cars.set('2', 'Mercedes')
cars.set('3', 'VW')

console.log(cars)

cars.forEach((value, key, map) => {
  console.log(`${key}: ${value} is the car selected`)
})

////////////////////////

function unique(arr) {

  return Array.from(new Set(arr));
 
}


let values = ["Butter", "Sauce", "Butter", "Chicken",
  "Butter", "Beans", "Sauce", "Sauce", ":-O"
];



console.log(unique(values)); 


///////////////////////