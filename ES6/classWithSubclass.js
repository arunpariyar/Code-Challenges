// We are going to create a car class and create a vehicle and create a truck subclass

//ES5 implementation
var Vehicle5 = function (name, model, brand) {
    this.name = name
    this.model = model
    this.brand = brand
}

Vehicle5.prototype.sayHello = function () {
    console.log(`Hey I am a ${this.name}`)
}

var Truck5 = function (name, model, brand, noOfWheels) {
    //Inheriting from the the Vehicle
    Vehicle5.call(this, name, model, brand)
    this.noOfWheels = noOfWheels
}

// Adding Vehicle to the prototype of Truck
Truck5.prototype = Object.create(Vehicle5.prototype)

let badTruck5 = new Truck5("BadTruck", "BadModel", "BadBrand", 10)

//ES6 Implementation

class Vehicle6 {
    constructor(name, model, brand) {
        this.name = name
        this.model = model
        this.brand = brand
    }
    sayHello() {
        console.log(`Hey I am a ${this.name}`)
    }
}

class Truck6 extends Vehicle6 {
    constructor(name, model, brand, noOfWheels) {
        super(name, model, brand)
        this.noOfWheels = noOfWheels
    }
}

let badTruck6 = new Truck6("BadTruck", "BadModel", "BadBrand", 10)
