//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(Powerkick, Powerpunch, Powerjab, numOfLimbs) {
  this.kick = Powerkick
  this.punch = Powerpunch
  this.jab = Powerjab
  this.limbs = numOfLimbs
  this.specialMove = function () {
    alert('Kiawaha!')
  }
}

let obiWanHayaNobi = new StreetFighter('Special Kick', 'Special Punch', 'Special Jab', 6)