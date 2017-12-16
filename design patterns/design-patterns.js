// ======================================================
// Constructor Pattern
// ======================================================
function Car(model, make, year){
  this.name = model;
  this.make = make;
  this.year = year;

  this.getInfo = function(){
    return("name = " + this.name + ", make = " + this.make + ", year = " + this.year);
  }
}

var car = new Car("Tesla", "Roadster", "2017")

var defineProp = (obj, key, value) => {
  var config = {}
  config.value = value
  Object.defineProperty(obj, key, config)
}

defineProp(car, "doors", 2)
console.log(car)


function Sword(metalType, handle, height = 1, width = 0.25){
  this.metalType = metalType
  this.handle = handle
  this.height = height
  this.width = width

  this.slice = () => {
    console.log("Your ", this.metalType, " sliced someone");
  }
} 

var mySword = new Sword("gold",false)

// ======================================================
// Module Pattern
// ======================================================
var myModule = (() => {
  var counter = 0
  return {
    incrementCounter: () => {
      counter++
      console.log('counter = ', counter);
    },
    resetCounter: () => {
      counter = 0
      console.log("resetting counter");
    }
  }
})()

console.log(myModule.incrementCounter());
console.log(myModule.incrementCounter());
console.log(myModule.resetCounter());

// ======================================================
// Singleton Pattern
// ======================================================
var mySingleton = (() => {
  var instance;

  function init(){
    var _randomNumber = Math.random();
    return {
      getRandomNumber: () => {
        console.log("Random number = ", _randomNumber);
      }
    }
  }

  return {
    getInstance: function(){
      instance = instance || init()
      return instance
    }
  }
})()

var first  = mySingleton.getInstance().getRandomNumber()
var second = mySingleton.getInstance().getRandomNumber()
console.log(first === second)

// ======================================================
// Observer Pattern
// ======================================================
