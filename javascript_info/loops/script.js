// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
let num = 0

while (num <= 100) {
  num = +prompt('please enter a number greater than 100')
  if (num > 100) {
    alert('great')
  } else if (num < 100) {
    +prompt(`Please enter a value greater than 100, ${num} is not enough.`)
    if (num < 100) {
      +prompt(`Please enter a value greater than 100, ${num} is still not enough.`)
    } else if (num > 100) {
      alert('there you go!')
    }
  }
}

// let num = 0;
// let firstTime = true;
// let secondTime = true;

// while (num <= 100) {
//   num = +prompt(firstTime ? 'Please enter a number greater than 100' : (secondTime ? `Please try again, ${num} is still not enough!` : `This is the third attempt. Please enter a number greater than 100:`));

//   if (num > 100) {
//     alert('Great!');
//   } else {
//     firstTime = false;
//     secondTime = false;
//   }
// }


// let num3 = 0;

// while (num3 <= 100) {
//   num3 = +prompt('Please enter a number greater than 100');

//   if (num3 > 100) {
//     alert('Great!');
//   } else {
//     alert(`Please enter a value greater than 100, ${num3} is not enough.`);
//   }
// }
