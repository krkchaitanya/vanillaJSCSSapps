
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


// function declaration
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


// This function gets executed after 2ms
setTimeout(() => {
   console.log(" -- printing this stmt after certian time -- "); 
}, 2000);





//  IIFE - immidiately invoked function expression
console.log(
    `
    =====================
    =========IIFE========
    =====================
    `
);

(function() {
    console.log(" Hitting IIFE function expression ");
})();
console.log(" printing this log stmt immidiately aftre IIFE ");



console.log(
    `
    =================================
    ======scope of the variable======
    =================================
    `
);

// Global scope
const frameworkName = "Angular JS";
const frameWorkVer = "6.5";

// Function scope
const getFrameworkName = function() {

    console.log(` Framework name - ${frameworkName}`);

    getFrameWorkVer();

    function getFrameWorkVer() {
        const frameWorkVer = "7.1";
        console.log(` Framework version - ${frameWorkVer}`);
    }
};

getFrameworkName();


// Synchronous functions

const posts = [
    {title: "post one", desc: "This is post one"},
    {title: "post Two", desc: "This is post two"}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("div1").innerHTML = output;
    }, 1000);
}

function addNewPost(title, desc) {
    setTimeout(() => {
        posts.push({title,desc});
    }, 2000);
};

addNewPost("post three", "this is post three");
getPosts();


// Asynchronous Callback functions
const todoitems = [
    {title: "item one", desc: "This is item one"},
    {title: "item Two", desc: "This is item two"}
];


function getItems() {
    setTimeout(() => {
        let output = '';
        todoitems.forEach((item, index) => {
            output += `<li>${item.title}</li>`;
        });
        document.getElementById("div2").innerHTML = output;
    }, 1000);
}

function addNewTodo(title, desc, callback) {
    setTimeout(() => {
        todoitems.push({title,desc});
        callback();
    }, 2000);
};
addNewTodo("item three", "this is item three", getItems);


// Promises
const machines = [
    {name: "HP", desc: "Runs windows OS"},
    {name: "MacBook", desc: "Runs Mac OS"}
];

function showMachines() {
    setTimeout(() => {
        let machinesHtml = ``;
        machines.forEach((machines, index) => {
            machinesHtml += `<li>${machines.name}</li>`;
        });
        document.getElementById("div3").innerHTML = machinesHtml;
    }, 3000);
}

function createMachine(name, desc, throwErr) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            machines.push({name, desc});

            let isError = throwErr;

            if(isError) {
                reject(" Error: while creating a new machine ");
            } else {
                resolve();
            }

        }, 1000);

    });

}

createMachine("Dell", "Runs Linux OS", true)
.then((machines) => showMachines())
.catch(error => console.log(error));
