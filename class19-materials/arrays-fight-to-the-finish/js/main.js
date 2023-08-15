//Create an array of movie titles. Loop through the array and each element to the h2.
let movieArray = ['moviea', 'movieb', 'moviec']
movieArray.forEach((element,i, a) => {
  document.querySelector('h2').innerText += ('_' + movieArray[i])
  console.log(element, a)
})
// for (let i = 0; i < movieArray.length; i++) {
//   document.querySelector('h2').innerText += ('_' + movieArray[i])
  
// }

// movieArray.forEach(e => e.querySelector('h2').innerText = movieArray[i])

//Create an array of numbers. Loop through the array and three to each number and replace the old number.(added h3 line with contents from newly obtained numbers array)
let nums = [10,20,30, 40]

nums.forEach((element,i) => {
  nums[i] = element + 3
  document.querySelector('h3').innerText += ('_' + nums[i])
})
console.log(nums)

// ARRAY NOTATION, WHEN SETTING UP PARAMETERS, PARENTHESIS ALWAYS TAKE IN THE ELEMENT, THEN THE INDEX, AND FINALLY THE FULL ARRAY (ELEMENT, i, ARRAY)

//Find the average of all the numbers from question two

let sum = 0
let nums2 = [10,20,30]
for (let i = 0; i < nums2.length; i++) {
  sum += nums2[i] 
  //  OR sum = sum + nums2[i]
}
console.log(sum/nums2.length)

// OR

let sum2 = 0
nums2.forEach((num2) => sum2 += num2)
console.log(sum2/nums2.length)
