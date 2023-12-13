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
  let login = prompt('Please provide your credentials');
  let message = '';

  if (login === 'Employee') {
    alert('Hello');
    message = 'Hello';
  } else if (login === 'Director') {
    alert('Good day');
    message = 'Good day';
  } else {
    alert('Invalid credentials');
    message = 'Invalid credentials';
  }

  console.log(message);
  loginFunction.login = login; // Attach login as a property of the function
  return login;
};

// Call the function
const userLogin = loginFunction();

// Now, you can access loginFunction.login in the console
console.log(loginFunction.login);



// ================================================
// let login = prompt('please enter your credentials')
// let message =
// login == 'Employee'? 'hello':
// login == 'Director'? 'good day':
// 'wrong credentials'

// alert(message)