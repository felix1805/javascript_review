//Create a stopwatch object that has four properties and three methods

//STOPWATCH OBJECT
let stopwatch = {}
// PROPERTIES
stopwatch.brand = 'Nike'
stopwatch.size = 'medium'
stopwatch.color = 'black'
//METHODS
stopwatch.start = function () {
  console.log('starting')
}

stopwatch.stop = function () {
  console.log('stopping')
}

stopwatch.sayBrand = function () {
  console.log(stopwatch.brand)
}