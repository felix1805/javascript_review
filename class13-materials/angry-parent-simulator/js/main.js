document.querySelector('#yell').addEventListener('click', yellFunction)

function yellFunction() {
  let fName = document.querySelector('#firstName').value
  let fMiddle = document.querySelector('#firstMiddle').value
  let lMiddle = document.querySelector('#lastMiddle').value
  let lName = document.querySelector('#lastMiddle').value

  document.querySelector('#placeToYell').innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`
}


// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }