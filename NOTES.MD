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

lesson 19: 2:26:40

WATCH CLASS ON NETWORKING
CODEWARS

class 23: timestamp 25:52 for contribution instructions

MICROSOFT COGNITIVE API = CHECK IT OUT
REVIEW OBJECTS SHOTS FROM LESSON 26 => get multiple cocktails to list with pictures 

class 27, finish card game by adding scoring system. 

active recall
spaced repitition

https://wesbos.com/javascript/04-the-dom/cardio =>  REVIEW
===========
PHILIP ROBERTS
JAKE ARCHIBALD
Zell Liew
===========
TOPICS FOR NODE^

=================

The bank anki

CRUD = 

create(post) = make something, 
read(get) = get something, 
update(put) = change something, 
delete(delete) = remove something

==================
MVC Model - model view controller
https://developer.mozilla.org/en-US/docs/Glossary/MVC
![MVC Model - model view controller](image.png)
![Detailed Model](image-1.png) - 3:59:00 on lesson 49-52
-use cloudinary to integrate media into todo auth framework

==================

Passport strategies for authentication using hackathon-starter codebase on github
![PASSPORT STRATEGIES](image-2.png)
![CONTINUED](image-3.png)

* leon has video on youtube walking through microsoft authentication integration

==================


class 41 @ 2:30:00 -> neccessary parts to allow for personal mongodb atlas access. (instructions also at end of slides for lesson(might be in 44/45))

check mayanwolfe and roofio vods

review ejs - build app with express and mongo db, maybe ejs with it.   

2:16

===================

Air Quality app API Token: 007ab308004fc4fe9cd4822403041200eb3a30c5
email used was mau5master

===================

## REACT NOTES:

npx create-react-app . => creates app in current directory

-react handles .env variables natively, and typically does not require dotenv to be installed.
-react components in a return statement need to be wrapped in a single argument, such as a div, to make sure react can treat multiple items as an individual component.
![EXAMPLE](image-4.png)

===================

![Array Methods](image-5.png)
![Array Comparison](image-6.png)

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.

## Getting the elements:

we can get element by its index, like arr[0]
also we can use at(i) method that allows negative indexes. For negative values of i, it steps back from the end of the array. If i >= 0, it works same as arr[i].
We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.


 ## Search an Array

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

## Array Cheatsheet

A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

arr.some(fn)/arr.every(fn) check the array.

The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

We can use every to compare arrays:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.