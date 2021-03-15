
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
        console.log(` Element Added- '${element}' at pos- ${this.count}`);
        this.count += 1;
    }

    pop() {
        !!this.count === 0 && undefined;
        let pulledElement = this.items[this.count - 1];
        console.log(` Element Retrieved - ${!!pulledElement ? pulledElement : "none"} from pos - ${this.count-1}`);
        this.count -= 1;
    }

    stackElementCount() {
        console.log(`Total no of elements present in the stack - ${this.items.length}`);
        return this.items.length;
    }

}

const stack = new Stack();

stack.stackElementCount();
stack.push("SpringMVC");
stack.push("Jenkins");
stack.push("JBoss");

stack.pop();
stack.pop();
stack.pop();
stack.stackElementCount();

