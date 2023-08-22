//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(powerMove, duckMove, punchMove){
  this.power = powerMove
  this.duck = duckMove
  this.punch = punchMove
  this.special = function(){
    console.log(`prepare to witness my ${this.power}!`)
  }
}

let MrMonster = new StreetFighter('Crush', 'Quick', 'Super')