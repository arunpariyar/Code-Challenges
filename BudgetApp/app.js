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
    var Expenses = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    // Object contructor for all Income
    var Expenses = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    //  Data Structure for data
    var data = { 
        allTransactions: { 
            expenses: [],
            incomes: []
        },
        tally: {
            expenses:0,
            incomes:0,
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
        return console.log(UIModule.getInputs());

        // 1. Get the input data

        // 2. Add the new entry to our data structure

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