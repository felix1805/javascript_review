// let num1 = +prompt('please enter first value')
// let num2 = +prompt('please enter second value')

// alert(num1 + num2)

//////////////////////////////////////

// function readNumber() {
//   let val = +prompt('please enter a number')
//   if (val === Number(val)) {
//     alert('read: ' + val)
//   } else {
//     return readNumber()
//   }
// }
// readNumber()

///////////////////////////////////////

// function random(min,max) {

//   for (let i = 1; i < 20; i++) {

//     let num = Math.random()

//     console.log(min + num * (max-min))
//   }

// }
// random(1,5)

// ////////////////////////////////////////

// function randomInteger(min, max) {
//   // here rand is from min to (max+1)
//   let randNum = min + Math.random() * (max + 1 - min);
//   return Math.floor(randNum);
// }

// alert( randomInteger(1, 3) );

// ///////////////////////////////////////

// let guestList = `Bill
// John
// mark
// paul`


// alert(guestList)

//////////////////////////////////////

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1) + str[5].toUpperCase() + str.slice(6)
// }

// alert( ucFirst('john bill') ); // John

// //alternate version

// function capitalizeNames(str) {
//   return str.replace(/\b\w/g, char => char.toUpperCase());
// }

// alert(capitalizeNames('john bill'));

/////////////////////////////

// function checkSpan(str) {
//   let lowerCaseStr = str.toLowerCase()
//   return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx')
// }

// alert(checkSpan('vIagra'))

// ////////////////////////////

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength) + '…' : str
// }

// alert(truncate('012345', 6))

////////////////////////////

// function currValue(str) {
//   return +str.slice(1) + (' dollars')
// }
// alert(currValue('$120'))

///////////////////////////

