
  
      const userAuth = () => {
        let ageCheck = confirm('Are you at least 18 years old?');
        let userName = prompt('What is your name?');
        let ageVerify = prompt('How old are you?');

        const userNamePlaceholder = document.getElementById('userNamePlaceholder');

        if (ageCheck === true && ageVerify >= 18) {
          const old = document.getElementById('old');
          if (old) {
            old.classList.toggle('hidden');
          }
          // Set the obtained userName in the HTML
          userNamePlaceholder.textContent = userName;
          alert(`Hello ${userName}, You may continue`);
        } else {
          const young = document.getElementById('young');
          if (young) {
            young.classList.toggle('hidden');
          }
          // Set the obtained userName in the HTML
          userNamePlaceholder.textContent = userName;
          alert(`You are not old enough, ${userName}`);
        }
      }

      userAuth();
    


