const button = document.querySelector('button')
const h1 = document.querySelector('h1')


const displayFunction = () => {
  const input = document.querySelector('input').value
  const numbers = input.split(',').map(Number);

      // Check if the input is a valid array
      if (numbers.some(isNaN)) {
          h1.textContent = 'Invalid input. Please enter valid numbers separated by commas.';
          return;
      }

      // Sort the array in descending order
      numbers.sort((a, b) => b - a);

      // Display the sorted array in an h1 element
      h1.textContent = 'Sorted Array: ' + numbers.join(', ');
}

button.addEventListener('click', displayFunction)