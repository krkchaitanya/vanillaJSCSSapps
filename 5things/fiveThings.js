
// JavaScript Hoisting
// Under the hood : Compiler will move the function declarations and the variable declarations to the top 
// Variable declaration
// Function declaration
console.log(
    `
    =====================
    =======HOISTING======
    =====================
    `
);
console.log(
    "is the variable - hoistedVarName defined :: ",  
    !!(hoistedVarName === "test hoisted name")
    ); 

var hoistedVarName = "test hoisted name";

console.log(
    "is the variable - hoistedVarName defined :: ",
    !!(hoistedVarName === "test hoisted name")
); 


getJSlibname()

// getJSFramework();



// function definition
function getJSlibname() {
    console.log(" -- JQuery --");
}


// variable declaration (function is assigned to the variable)
var getJSFramework = function() {
    console.log(" -- Vue.js & React.js --");
}



//  Callstack - Data structures
// Function declaration
console.log(
    `
    =====================
    ======Callstack======
    ====DataStructure====
    =====================
    `
);

class Stack {

    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(` Element Added- '${element}' at pos-> ${this.count}`);
        this.count += 1;
    }

    pop() {
        
        console.log(
            ` Element retrieved- '${!!this.items.length ? this.items[this.items.length - 1] : "none"}' at pos-> ${this.items.length - 1}`
            );
        
        !!this.items[this.items.length - 1] && this.items.splice(this.items.length - 1);
        !!this.count && (this.count -= 1);
    }

    stackElementCount() {
        console.log(` Element count- ${this.items.length}`);
        return this.items.length;
    }

}

const stack = new Stack();

stack.stackElementCount();
stack.push("SpringMVC");
stack.push("Jenkins");
stack.push("JBoss");
stack.stackElementCount();
stack.pop();
stack.stackElementCount();
stack.pop();
stack.stackElementCount();
stack.pop();
stack.stackElementCount();
stack.pop();
stack.stackElementCount();
stack.push("JBoss");
stack.stackElementCount();
stack.pop();
