//creating the three modules

//UI MODULE
var UIModule = (function(){

    // saving all the DOM we will need to use privately
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer:'.expenses__list'
    }

    // Public Data
    return {
        //getting Inputs from the UI
        getInputs: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        // Displaying the input to the UI
        displayEntry: function(obj, type){
            var html, newHtml, element;
            
            if(type === "inc"){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === "exp"){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);            

        },

        clearInputs: function(){
            var inputs, inputArr;
            //selected all the input fields with generates a node list.
            inputs = document.querySelectorAll(DOMstrings.inputDescription + ' , ' + DOMstrings.inputValue);
            
            //Turn the nodelist into an array
            inputArr = Array.prototype.slice.call(inputs);

            inputArr.forEach(function(current, index, array){
                current.value = "";
            });

            inputArr[0].focus();
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
        },
        budget: 0,
        percentage: -1
    };

    // Function that can be used to total income or expense
    var calcTally = function(type){
        var sum = 0;
         
        data.allTransactions[type].forEach(function(cur){
            sum += cur.value;
        });
        data.tally[type] = sum;
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

       calculateBuget:function(){

            // calculate both income and expense
            calcTally('inc');
            calcTally('exp');
           
            //calulate the budget 
            data.budget = data.tally.inc - data.tally.exp;

            //calutate the percentage of expense
            if(data.tally.inc > 0){
                data.percentage = Math.round((data.tally.exp / data.tally.inc) * 100); 
            } else {
                data.percentage = -1;
            }
            
            
       },
       getBudget:function(){
           return {
                budget: data.budget,
                percentage: data.percentage,
                incTotal:data.tally.inc,
                expTotal:data.tally.exp
           }
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

    var UpdateTransaction = function(){
            //Calling the caluateBudget function from Data Module
            DataModule.calculateBuget();
    
            //Get the budget.
            var budget = DataModule.getBudget();
    
            console.log(budget);
            // Update the UI
    };

    var addEntry = function(){
        var input, newEntry;

        // 1. Get the input data
        input = UIModule.getInputs();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0 ) {
            // 2. Add the new entry to our data structure
            newEntry = DataModule.addEntry(input.type, input.description, input.value);

            // 3. Add the new item to the UI
            UIModule.displayEntry(newEntry, input.type);

            // 4. Clear the input areas 
            UIModule.clearInputs();

            //Updating Transactions
            UpdateTransaction();
        };

        
    };

    
    return {
        init: function(){
            console.log("Application Started");
            setupEventListeners();
        }
    };

})(UIModule, DataModule);

ControlModule.init();