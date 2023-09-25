// function gaussianSummation(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// const numbers = [1000,2000,3000];
// const result = gaussianSummation(numbers);
// console.log(result);


function gaussianSummation(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 2000];
const result = gaussianSummation(numbers);
console.log(result)