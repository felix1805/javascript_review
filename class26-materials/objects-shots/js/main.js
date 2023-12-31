//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks
      )
      document.querySelector('img').src = data.drinks[0,1,2,3].strDrinkThumb
      document.querySelector('h2').innerText = data.drinks[0,1,2,3].strDrink
      document.querySelector('h3').innerText = data.drinks[0,1,2,3].strInstructions
    })
    .catch(err => {
      console.error('oops', err)
    })
}