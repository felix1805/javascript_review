//Write your pseduo code first! 
document.querySelector('#button').addEventListener('click', convert)

function convert() {
  let input = Number(document.querySelector('#input').value)
  const fConversion = ((input * (9/5)) + 32)
  if (typeof input == 'number') {
    document.querySelector('#output').innerText = fConversion + '°F'  
  } else {
    document.querySelector('#output').innerText = 'Please insert a number'
  }
}
