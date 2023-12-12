const greetUser = () => {
  let isValidLogin = true;

  while (isValidLogin) {
      let login = prompt('Please enter your position.');
      let message =
          login === 'E' ? 'Hello' :
          login === 'D' ? 'Greetings' :
          'No login';

      if (message !== 'No login') {
          isValidLogin = false;
      }

      alert(message);
  }
}

// Call the function
greetUser();
