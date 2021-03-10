
// JavaScript Hoisting
// Under the hood : Variable declarations with no value being assigned to it and function definitions will move to top of the list/file while compilation.
// Variable declaration
// Function definition

console.log(
    !!(hoistedVarName === "test hoisted name")
    ); 

var hoistedVarName = "test hoisted name";

console.log(
    !!(hoistedVarName === "test hoisted name")
); 



getJSlibname();
getJSFramework();


// function definition
function getJSlibname() {
    console.log(" -- JQuery --");
}


// variable declaration
var getJSFramework = function() {
    console.log(" -- Vue.js & React.js --");
}


