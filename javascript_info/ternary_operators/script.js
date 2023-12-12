// const greetUser = () => {
//   let isValidLogin = true;

//   while (isValidLogin) {
//       let login = prompt('Please enter your position.');
//       let message =
//           login === 'E' ? 'Hello' :
//           login === 'D' ? 'Greetings' :
//           'No login';

//       if (message !== 'No login') {
//           isValidLogin = false;
//       }

//       alert(message);
//   }
// }

// // Call the function
// greetUser();

// ================================================

const loginFunction = () => {
  let login = prompt('please provide your credentials')
  let message = ''
  if (login == 'Employee') {
    message = console.log('hello')
    console.log(login)
    
    
  } else if (login == 'Director') {
    message = alert('good day')
  } else {
    message = alert('invalid credentials')
    loginFunction()
  }
}
loginFunction()

// ================================================
// let login = prompt('please enter your credentials')
// let message =
// login == 'Employee'? 'hello':
// login == 'Director'? 'good day':
// 'wrong credentials'

// alert(message)