// let dayOfWeek = prompt('what day of the week is it?').toLowerCase()

// let dayCheck = (dayOfWeek == 'wednesday') ? 
//  () => alert('its wednesday') :
//  () => alert('its not wednesday')


// dayCheck()

// //++++++++++++++++++++++++++++++++++++

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => { alert("You agreed."); },
//   () => { alert("You canceled the execution."); }
// );

function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result = result * x;
    console.log(result)
    console.log(i + ' value of i')
  }

  return result;
}
pow(2, 2)
// 2 * 2 * 2 = 8

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) { result *= x; }
  return result;
}

let x = prompt("x?", ''), n = prompt("n?", '')
if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else {
  alert(pow(x, n))
}