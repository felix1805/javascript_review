

let base = +prompt('Enter value for x', 'x');
let exponent = +prompt('Enter value for n', 'n');


function pow(base, exponent) {
  let result = base; // set initial value (3 for example)
  let calculationString = `${base}`; // initialize the string with the base

  for (let i = 1; i < exponent; i++) {
    result = result * base; //returns intial multiplication, 3*3, loop runs twice (var2 -1), as ^3 requires 2 multiplication operations, thus returns 27

    calculationString += ` * ${base}`; // append each multiplication step to the string
  }

  document.querySelector('h1').innerText = `${calculationString} = ${result}`;
}

pow(base, exponent);

/////////////////////////////////////

let n = +prompt('please enter a value to check for primes leading up to value')

for (let i = 2; i <= n; i++) {
  let isPrime = true
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false
      console.log(i + " is not a prime number" + j + ' = value of j')
      break
    }
  }
  if (isPrime) {
    console.log(i + ' is a prime number')
  }
}

