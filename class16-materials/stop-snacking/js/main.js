//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', snackTime)
function snackTime() {
  let input = Number(document.querySelector('input').value)
  document.querySelector('#stops').innerText = ''
  for (let index = 0; index < input; index++) {
  document.querySelector('#stops').innerText +=  ' stop snacking!'
 }
}