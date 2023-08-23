//Create a Tony Hawk Pro Skater constructor that makes skasting game character with 4 properties and 3 methods
class TonyHawkConstructor {
  constructor(tHname, tHoutfit, tHshoes, tHSkateboard) {
    this.name = tHname
    this.outfit = tHoutfit
    this.shoes = tHshoes
    this.skateboard = tHSkateboard
  }
  specialTrick() {
    console.log('KickFlip!')
  }
  speed() {
    console.log('full speed!')
  }
  grind() {
    console.log('50-50grind all day!')
  }
}


let tonyHawk = new TonyHawkConstructor('Tony Hawk', 'Skate Pants, Element Shirt', 'DC Shoes', 'Sweet logo, awesome Trucks, perfect deck tape')


// old format before ES6
function TonyHawkConstructor(tHname, tHoutfit, tHshoes, tHSkateboard) {
  this.name = tHname
  this.outfit = tHoutfit
  this.shoes = tHshoes
  this.skateboard = tHSkateboard

  this.specialTrick = function () {
    console.log('KickFlip!')
  }
  this.speed = function () {
    console.log('full speed!')
  }
  this.grind = function () {
    console.log('50-50grind all day!')
  }
}

let tonyHawk2 = new TonyHawkConstructor('Tony Hawk', 'Skate Pants, Element Shirt', 'DC Shoes', 'Sweet logo, awesome Trucks, perfect deck tape')