
const userAuth =() => {
  let ageCheck = confirm('Are you at least 18 years old?')
  let userName = prompt('What is your name?')
  let ageVerify = prompt('How old are you?')
if (ageCheck === true && ageVerify>=18) {
 const old = document.getElementById('old')
 old.classList.toggle('hidden')
  alert(`Hello ${userName}, You may continue`)
} else {
  const young = document.getElementById('young')
  young.classList.toggle('hidden')
  alert(`You are not old enough, ${userName}`)
}
}
userAuth()
