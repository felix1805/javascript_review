//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
  constructor(machineMake,machineModel,machineColor,machinePrice){
    this.make = machineMake
    this.model = machineModel
    this.color = machineColor
    this.price = machinePrice
  }
  brew(){
    alert('espresso is being brewed')
  }
  clean(){
    alert('machine is cleaning')
  }
}

let bialetti = new EspressoMachine('bialetti', 'standard 200ml', 'stainless', 30)

// --------------------------------------------------------------

let hourlyRate = 250
let hours = 150
let taxRate = .35

function calculateProfit(rate,numOfHours,taxes){
  return rate * numOfHours * (1-taxes)
}

function holdForTaxes(profit){
  return hourlyRate * hours - profit
}

let profit = calculateProfit(hourlyRate, hours, taxRate)
let taxesHeld = holdForTaxes(profit)

console.log(profit)
console.log(taxesHeld)


function ObjectOrientedAccounting(hourlyRate,hours,taxRate){
  this.hours = hours
  this.taxRate = taxRate
  let rate = hourlyRate
  let calculatedProfit = function () {
    return rate * this.hours * (1-this.taxRate)
    
  }
  this.invoiceClient = function(){
    return `your invoice total is ${rate * this.hours}`
  }
}

let felix = new ObjectOrientedAccounting(250, 150, .35)
console.log(felix.invoiceClient())
console.log(felix.calculatedProfit())
console.log(felix.rate)
console.log(felix.taxRate)

