// let browser = prompt('please specify your browser')
// if (browser == 'Edge') {
//   alert('You are using Edge')
// } else if (browser == 'Chrome') {
//   alert('You are using Chrome')
// } else {
//   alert('you are using a different browser')
// }

// =================================================

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

// // written as switch statement below

// let val = +prompt('a?', '')

// switch (val) {
//   case 0:
//     alert(0)
//     break;
//   case 1:
//     alert(1)
//     break;
//   case 2:
//   case 3:
//     alert('2,3')
//     break;
//   default:
//     alert('you specified a different number')
//     break;
// }

function doNothing() {
  return;
}

alert( doNothing() === undefined )