// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }

// alert(0||1)

// true||alert('true')
// false||alert('false')

// alert( 1 && 2 && 4 && 3 )
//  (alert(1) || 2 || alert(3) )
//  alert(alert(1))
//  alert(alert())

//  let age = 100

// //  if (age >=14 && age <= 90) {
// //   alert(age)
// //  }

//  if (!age <=90 || !age>=14) {
//   alert(age)
//  }

let login = prompt(`Who's There?`)

if (login == 'Admin') {
  let password = prompt('Password?', 'insert password here')
  
  if (password == 'TheMaster') {
    alert('Welcome')
  } else if (password == '' || password == null) {
    alert('Canceled')
  } else {
    alert('Wrong Password')
  }

} else if (login == '' || login == null) {
  alert('Cancelled')
} else if (login != 'Admin') {
  alert('I dont know you')
}


