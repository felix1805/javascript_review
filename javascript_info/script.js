
const userAuth = () => {
  let ageCheck = confirm('Are you at least 18 years old?')
  let userName = prompt('What is your name?')
  let ageVerify = prompt('How old are you?')
  if (ageCheck === true && ageVerify >= 18) {
    alert(`Hello ${userName}, you may continue.`)
    const old = document.getElementById('old')
    const oldUser = document.getElementById('oldUser')
    old.classList.toggle('hidden')
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    oldUser.innerText = userName
  } else {
    alert(`You are not old enough, ${userName}.`)
    const young = document.getElementById('young')
    const youngUser = document.getElementById('youngUser')
    young.classList.toggle('hidden')
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    youngUser.innerText = userName
  }
}
userAuth()

