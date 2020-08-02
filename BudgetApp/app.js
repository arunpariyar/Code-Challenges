//creating the three modules

//UI MODULE
var UIModule = (function(){
   
})();

//DATA MODULE
var DataModule = (function(){

})();

//CONTROL MODULE
var ControlModule = (function(uiMod, dataMod){

    var addEntry = function(){
        console.log('Event Acknowledged');
    }

    //Add event listener when button is clicked
    document.querySelector(".add__btn").addEventListener('click', addEntry);

    //Add event listener when enter is pressed
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            addEntry();
        }
    });

})(UIModule, DataModule);