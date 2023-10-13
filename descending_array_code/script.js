const px = document.querySelector('p');
const h1 = document.querySelector('h1');

document.addEventListener('click', function() {

  px.addEventListener('click', function() {
      // Get the input value and split it into an array
      const inputArray = document.getElementById('inputArray').value;
      const numbers = inputArray.split(',').map(Number);

      // Check if the input is a valid array
      if (numbers.some(isNaN)) {
          h1.textContent = 'Invalid input. Please enter valid numbers separated by commas.';
          return;
      }

      // Sort the array in descending order
      numbers.sort((a, b) => b - a);

      // Display the sorted array in an h1 element
      h1.textContent = 'Sorted Array: ' + numbers.join(', ');
  });
});
