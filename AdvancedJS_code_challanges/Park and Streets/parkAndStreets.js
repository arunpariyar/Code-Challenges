//Creating an entity class parks and streets will be subclassess of this class
class Entity {
    constructor(name,buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
    calculateAge(){
        let age =(new Date()).getFullYear() - this.buildYear;
        this.age = age
    }
}

class Park extends Entity {
    constructor(name,buildYear,noOfTrees,area,age){
        super(name,buildYear)
        this.noOfTrees = noOfTrees
        this.area = area
        this.age = age
    }
    treeDensity(){
        const density = this.noOfTrees/this.area;
        console.log(`${this.name} has the tree density of ${density}`);
    }
}

class Street extends Entity{
    constructor(name,buildYear,length, size = 3,age){
        super(name,buildYear)
        this.length = length
        this.size = size
        this.age = age
    }
    classifyStreet(){
        const classification = new Map();
        classification.set(1, "Tiny");
        classification.set(2, "Small");
        classification.set(3, "Normal");
        classification.set(4, "Big");
        classification.set(5, "Huge");
        console.log(`${this.name}, build in ${this.buildYear} is a ${classification.get(this.size)} park.`)
    }
}

// we will create 3 parks - Green Park, Red Park, Blue Park

let allParks = [ 
    new Park("Green Park",1980,500,10),
    new Park("Basundara Park",1950,900,15),
    new Park("Prithivi Park",2000,1200,20)
];

let allStreets = [
    new Street("Baidam Street",1950,200,3),
    new Street("Haji Street",1980,150,2),
    new Street("Rato Street",1990,500,4),

];

function calc(arr){
    const sum = arr.reduce((previous,current,index) => previous + current, 0);
    return [sum, sum/arr.length];
}

function reportPark(p){ 
    console.log("----PARK REPORT----");

    //Density 
    p.forEach(el => el.treeDensity());

    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`our ${p.length} have the average age of ${avgAge}`);

    // Parks with more than 1000 trees
    const i = p.map(el => el.noOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`)
};

function reportStreet(s){
    console.log("----PARK REPORT----");
    // Total and Average Length
    const lengths = s.map(el => el.length);
    const [totalLength, avgLength] = calc(lengths);
    console.log(`The total length of streets is ${totalLength} and the average length is ${avgLength}`);

    //Size Classification
    s.forEach(el => el.classifyStreet());
};

reportPark(allParks);
reportStreet(allStreets);








