//Create a constructor with 4 properties and 3 methods
function CarConstructor(carMake,carColor,carEngine,carDrivetrain){
  this.make = carMake
  this.color = carColor
  this.engine = carEngine
  this.driveTrain = carDrivetrain

  this.topSpeed = function(){
    console.log('180mph')
  }
  this.stoppingDistance = function(){
    console.log('100yards')
  }
  this.differential = function(){
    console.log('Limited Slip Differential, 2way')
  }
}

let NissanSilvia = new CarConstructor('Nissan', 'Blue', 'SR20', ['RWD','Front Engine'])