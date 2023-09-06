//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
  constructor(name){
    this.name = name
  }
}

class Parrot extends Animal{
  constructor(name,breed) {
   super(name)
    this.breed = breed
  }
}
let tai = new Parrot('tai','dusky conure')