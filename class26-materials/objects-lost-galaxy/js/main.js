//Create a pizza object that has four properties and three methods
let pizza = {}

pizza.size = '12inch'
pizza.style = 'napolitan'
pizza.type = 'margherita'
pizza.toppings = ['burrata', 'tomato sauce', 'basil']

pizza.slice = function(){
  console.log('make it six slices')
}
pizza.taste = function () {
  console.log('fantastico')
}
pizza.thickness = function(){
  console.log('its thin and crispy!')
}