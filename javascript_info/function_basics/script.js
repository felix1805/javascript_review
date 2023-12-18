// function checkAge(age) {
//   if (age => 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// checkAge(prompt('please specify your age'))

function ageVerify(age) {
  return(age>=18)? alert('please enter'): alert('access denied')
}
ageVerify(prompt('please enter your age'))

function verifyAge(age){
   age>=18 || alert('access denied')
}

verifyAge(prompt('please enter specify your age'))

// ++++++++++

function minMax(a,b){
  return a>b? alert(a): alert(b)
}
minMax(4,2)