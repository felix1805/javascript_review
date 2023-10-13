// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let bulbasaur = 16 - 5
let caterpie = 7 - 1
let weedle = 7 - 1
totalcandies = bulbasaur + caterpie + weedle
console.log(totalcandies)


let num1 = 7 - 1
let num2 = 5 - 2
let num3 = 5 - 3

numTotal = num1 + num2 + num3
console.log(numTotal)
//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function FtoC(temperatureF) {
  celsius = (temperatureF - 32) * 5 / 9
  console.log('Current Temperature in F = ' + temperatureF + ', which equals to ' + celsius + ' in degrees Celsius')

  return celsius
}
FtoC(212)

function readyToBattle(currentTempinF) {
  let convertedTempinC = FtoC(currentTempinF)
  if (convertedTempinC > 0) {
    console.log('Ready to battle')
  } else {
    console.log('It is too cold to battle')
  }
}
readyToBattle(0)


function convertTemp(tempinC) {
  let cToF = (tempinC * 9 / 5) + 32
  return cToF
}
console.log(convertTemp(0))

function belowFreeze(temp) {
  let tempbelow = convertTemp(temp)
  console.log(temp)
  console.log(tempbelow)
  if (tempbelow > 0) {
    console.log('it is above freezing')
  } else {
    console.log('it is below freezing')
  }
}
belowFreeze(-20)
//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function iChooseYou(partySize) {
  for (let i = 1; i <= partySize; i++) {
    console.log('pika i choose you!')

  }
}

iChooseYou(2)

//return price without vat
function excludingVatPrice(price) {

  if (price === null) {
    return -1
  } let vat = 1.15;
  let priceWthVat = price / (vat);
  let fixedPrice = Number(priceWthVat.toFixed(2));
  console.log(fixedPrice)


}
excludingVatPrice(231)

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
  
}

class Person2 {
  constructor(name,age) {
      this.name =name;
      this.age =age; 
  }
  get info() {
        return`${this.name}s age is ${this.age}`;
    }
  getInfo(){
    return this.info;
  }
}
let John = new Person2("john",34);

John.getInfo();


class Car{

  static numberOfCars = 0;

  static beginRace(){
    console.log("The race has begun!");
  }

  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;
  }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger");

console.log(Car.numberOfCars);
Car.beginRace();

var hotpo = function(n){
  let num = n;
  let count = 0;
  while (num != 1) {
      if (num % 2 == 0) {
          num = num / 2;
      } else {
          num = (3 * num) + 1;
      }
      count++;
  }
  return count;
}

var Ghost = function() {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * (colors.length));
  this.color = colors[colorIndex];
};

function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}