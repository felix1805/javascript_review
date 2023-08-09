//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)


document.querySelector('#check').addEventListener('click', checkFunction)

function checkFunction() {
  const day = document.querySelector('#day').value.toLowerCase()

  if (day === 'tuesday' || day === 'thursday') {
    console.log('its tuesday or thursday')
  } else if ( day === 'saturday' || 'sunday') {
    console.log('its the weekend')
  } else if ( day === 'wednesday') {
    console.log('its humpdaaayYYY')
  } else {
    console.log('boring day')
  }
}