console.log("Code Challange 3");

const mark = {
    firstName:'Mark',
    secondName: 'Miller',
    weight: 50,
    height: 1.69,
    BMI: 0,

    calcBMI: function(){
        this.BMI = this.weight/(this.height **2);
        return this.BMI;
    }
};


const john = {
    firstName:'John',
    secondName: 'Smith',
    weight: 80,
    height: 1.95,
    BMI: 0,

    calcBMI: function(){
        this.BMI = this.weight/(this.height **2);
        return this.BMI;
    }
};

if(mark.calcBMI() > john.calcBMI()){
    console.log(`Mark's BMI(${mark.BMI}) is higher than John's ${john.BMI}`);
} else {
    console.log(`John's BMI(${john.BMI} is higher than Mark's(${mark.BMI})`);
}

