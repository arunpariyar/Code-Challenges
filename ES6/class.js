// ES5
//creating a superhero object blueprint using object function constructor  
var Superhero5 = function(name,brand,sidekick){
    this.name = name;
    this.brand = brand;
    this.sidekick = sidekick;
}

//adding a callSideKick Method to the prototype in order to ensure all object created inherit the method
Superhero5.prototype.callSideKick = function() {
    console.log("Help, "+ this.sidekick);
}

//Creating superman object using Superhero5 blueprint
let superman5 = new Superhero5("Superman","DC","SuperBoy");


// ES6 - Class doesnt add any new feature but a new way to create the blueprints rather than using the object function constructor

class Superhero6 {
    constructor(name,brand,sidekick)
        {
            this.name = name;
            this.brand = brand;
            this.sidekick = sidekick;
        }
        // methods can be added directly to the class 
        callSideKick(){
            console.log("Help, "+ this.sidekick); 
        }
        // it is also possible to call static methods that just work on the class itself
        static greeting(){
            console.log("Greetings!!!!");
        }
}

let superman6 = new Superhero6("Superman","DC","SuperBoy");

