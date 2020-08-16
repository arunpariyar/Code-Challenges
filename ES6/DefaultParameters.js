/* 
Default parameters allow us to have assign default value very easily 
in this example we are going to create a function construtors of Superherowhose default
brand value is "DC" unless specified.
*/

//ES5 
function Superhero5(name, alias, brand){
    brand === undefined ? brand = 'DC' : brand = brand;
    this.name = name,
    this.alias = alias,
    this.brand = brand
}

var superman = new Superhero5('Superman','Klark Kent');
console.log(superman);

var spiderman = new Superhero5('Spiderman','Peter Parker','Marvel');
console.log(spiderman);

//ES6 
function Superhero6(name, alias, brand = 'DC'){
    this.name = name,
    this.alias = alias,
    this.brand = brand
}

var superman = new Superhero6('Superman','Klark Kent');
console.log(superman);

var spiderman = new Superhero6('Spiderman','Peter Parker','Marvel');
console.log(spiderman);

