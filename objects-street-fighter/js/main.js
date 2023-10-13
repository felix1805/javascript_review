//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function SFConstructor(SFname, SFoutfit, SFheight, SFspeed) {

  this.name = SFname
  this.outfit = SFoutfit
  this.height = SFheight
  this.speed = SFspeed

  this.specialMove = function () {
    console.log('Hayyyya')
  }
  this.strength = function () {
    console.log('Scissor Kick!')
  }
  this.weakness = function () {
    console.log('no, not broccoli!')
  }
  this.velocity = function () {
    console.log(`Im going ${SFspeed}mph Bizneka!`)
  }
}

let mrMyagi = new SFConstructor('MrMiyagi', 'Galabeya', 147, 300)

class SFConstructor2 {
  constructor(SFname, SFoutfit, SFheight, SFspeed2) {

    this.name = SFname
    this.outfit = SFoutfit
    this.height = SFheight
    this.speed2 = SFspeed2
  }
  specialMove() {
    console.log('Hayyyyallll')
  }
  strength() {
    console.log('Scissor Kickzzzzz!')
  }
  weakness() {
    console.log('no, not broccolization!')
  }
  velocity2() {
    console.log(`Im going ${SFspeed2}mph Biznekayeeen!`)
  }
}

let mrMyagi2 = new SFConstructor2('MrMiyagi2', 'Galabeya', 147, 300)


