//creating the three modules

//UI MODULE
var UIModule = (function(){

    // saving all the DOM we will need to use privately
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    // Public Data
    return {
        //getting Inputs from the UI
        getInputs: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        // allowing our DOMstring to be used by other modules
        getDOMstrings: function(){
            return DOMstrings;
        }
        
    } 
})();

//DATA MODULE
var DataModule = (function(){

    //Object contructor for expenses
    var Expense = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    // Object contructor for all Income
    var Income = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    //  Data Structure for data
    var data = { 
        allTransactions: { 
            exp: [],
            inc: []
        },
        tally: {
            exp:0,
            inc:0,
        }
    };

    return{
       addEntry: function(type,des,val) {
           var newEntry, ID;

           //Creating a new ID using the ID number of the last item in the array.
           if(data.allTransactions[type].length > 0){
               ID = data.allTransactions[type][data.allTransactions[type].length - 1].id + 1 ;
           } else {
                ID = 0;
           }

           //Creating a new Entry based on the value ie. inc or exp.
           if(type ==="exp"){
                newEntry = new Expense(ID, des, val);
           } else {
                newEntry = new Income(ID, des, val);
           }

           //adding item to an our exp array.
           data.allTransactions[type].push(newEntry);

           //returning the new entry for use in other module.
           return newEntry; 
       },
       testing: function(){
           console.log(data); 
       }
    };

})();

//CONTROL MODULE
var ControlModule = (function(uiMod, dataMod){

    //Setting up our Event Listeners
    var setupEventListeners = function(){
        //accessing the DOMstrings from the UI module
        var DOM = UIModule.getDOMstrings();

        //Add event listener when button is clicked
        document.querySelector(DOM.inputButton).addEventListener('click', addEntry);

        //Add event listener when enter is pressed
        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13){
                addEntry();
            }
        });
    }

    var addEntry = function(){
        var input, newEntry;

        // 1. Get the input data
        input = UIModule.getInputs();

        // 2. Add the new entry to our data structure
        newEntry = DataModule.addEntry(input.type, input.description, input.value);

        // 3. Add the new item to the UI

        // 4. Calculate Budget

        // 5. Update the UI
    }

    return {
        init: function(){
            console.log("Application Started");
            setupEventListeners();
        }
    }

})(UIModule, DataModule);

ControlModule.init();