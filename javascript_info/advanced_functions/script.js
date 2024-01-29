// // iterative method to solve a power function

// function toPower(x, n) {
//   let result = 1
//   for (let i = 0; i < n; i++) {
//     result *= x

//   }
//   return result
// }

// console.log(toPower(4, 2))

// // recursive method = simplyfy function into multiple easier steps
// // When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

// function recursionPow(x, n) {
//   if (n == 1) {
//     return x
//   } else {
//     return x * recursionPow(x, n - 1)
//   }
// }
// console.log(recursionPow(3, 4))

// // same function using conditional operator

// function recursionCond(x, n) {
//   return (n == 1) ? x : x * recursionCond(x, n - 1)
// }
// console.log(recursionCond(3,4))

// ////////////////////////////////

// Recursion for loop to add up numbers to n with i<=n
function recurAdd(num) {
  let result = 0
  for (let i = 1; i <= num; i++) {
    result += i

  }
  return result
}

console.log(recurAdd(4))

// Recursion for loop to multiply numbers up to n with i<=n

function recurMulti(num) {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result *= i

  }
  return result
}
console.log(recurMulti(5))

/// using terenary operator

function terenaryMulti(n) {
  return n ? n * terenaryMulti(n - 1) : 1
}

console.log(terenaryMulti(5))

