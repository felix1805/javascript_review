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

REACT NOTES:

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

Getting the elements:

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
