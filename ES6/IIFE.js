//IIFE means immediatly invoked functions expression it is mainly used for data privacy

// IIFE IN ES5 is created by turning an anonymous function into expression and invoking it 

(function(){

});

//IIFE IN ES6 is much simpler but it is important to note making use of var variable renders this useless
{
    var v = 'var';
    let l = 'let';
    const  c = 'const';
}
// this statement will still return v
console.log(v);
