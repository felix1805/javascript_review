// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
// let num = 0

// while (num <= 100) {
//   num = +prompt('please enter a number greater than 100')
//   if (num > 100) {
//     alert('great')
//   } else if (num < 100) {
//     +prompt(`Please enter a value greater than 100, ${num} is not enough.`)
//     if (num < 100) {
//       +prompt(`Please enter a value greater than 100, ${num} is still not enough.`)
//     } else if (num > 100) {
//       alert('there you go!')
//     }
//   }
// }

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


// let i = 0

// while (i<3) {
//   alert(`number ${i}!`)
//   i++
// }

// let num = prompt('please insert a number')
// let i = 1
// while (i<=num) {
//   let result = 1
//   let num2 = result*i
//   if (isPrime(num2)) {

//     console.log(num2)
//   }
//   i++
// }

// let n;
// n = prompt("Enter a number greater than 1");
// if (n <= 1)
// alert("Invalid input");
// else if (n == 2)
// alert("The number is a prime number");
// else {
// for (i = 2; i < n; i++) {
// if(n%i==0){
// alert("The number is not a prime number");
// break;
// }
// }
// if(i == n )
// alert("The number is a prime number");
// }

// let num = prompt('Please insert a number');
// let i = 2; // Start checking from 2, as 1 is not a prime number
// console.log(num)

// while (i <= num) {
//   let isPrime = true;
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0) {
//       console.log('value of i= ' + i)
//       console.log('value of j= ' + j)
//       console.log('value of i/j= ' + i/j)
//       isPrime = false;
//       break;
//     }
//   }

//   // Output i if it is a prime number
//   if (isPrime) {
//     console.log(i + " is a prime number.");
//   }

//   i++;
// }


let n = prompt("Please input a number");

for (let i = 2; i <= n; i++) {
  let isPrime = true; // Flag to track whether i is prime

  for (let j = 2; j < i; j++) { //removed <= Math.sqrt(i) for testing
    if (i % j === 0) {
      isPrime = false; // Set the flag to false if a divisor is found
      console.log('value of j ' + j, 'value of i ' + i)
      break;
    }
  }

  if (isPrime) {
    console.log(i + ' is a prime number');
  }
}



// =======================


// let num = prompt("Tell me the number");

// for (let i = 2; i <= num; i++) {
//   let count = 0;

//   // Check for divisibility up to the square root of i
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       ++count;
//       break; // Exit the loop early if a divisor is found
//     }
//   }

//   // Output i if it is a prime number
//   if (count === 0) {
//     alert(i);
//   }
// }
