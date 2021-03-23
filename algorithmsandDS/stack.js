
/* Stacks! */

// functions: push, pop, peek, length/size


// Palindrome

function isPalindrome(reqWord) {
    let stackletters = [];
    let word = reqWord;
    let rword = "";

    for(i = 0; i < word.length; i++) {
        stackletters.push(word[i]);
    };

    for(i = 0; i < word.length; i++) {
        rword += stackletters.pop()
    }

    if(word === rword) {
        return true;    
    }

    if(word !== rword) {
        return false;
    }
}

console.log(" Palindrome check --racecar--> ", isPalindrome("racecar"));
console.log(" Palindrome check --bucket--> ", isPalindrome("bucket"));


var Stack = function() {

    this.count = 0;
    this.storage = {};

    // PUSH
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // POP
    this.pop = function() {

        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //PEEK
    this.peek = function() {
        return this.storage[this.count-1];
    }

    //LENGTH
    this.length = function() {
        return this.count;
    }
}

var stack = new Stack();

stack.push("elemone");
stack.push("elemtwo");
stack.push("elemthree");
stack.push("elemfour");

console.log("--peek element--", stack.peek());
console.log("--pop element--", stack.pop());
console.log("--peek element--", stack.peek());
console.log("--length of the stack--", stack.length());




/*
--------------------
------- Sets -------
--------------------
*/

var mydataset = function() {

    var collection = [];

    // is element exist in the collection
    this.has = function(dataele) {
        return collection.indexOf(dataele) !== -1;
    }

    // add element to the set
    this.add = function(dataele) {

        if (collection.indexOf(dataele) !== -1) {
            console.log("Item already exists in the set");
            return false;
        } else {
            collection.push(dataele);
            return true;
        }
    }

    //remove element from the set
    this.remove = function(dataele) {

        if (this.has(dataele)) {
            dataeleIndex = collection.indexOf(dataele);
            collection.splice(dataeleIndex,1);
            return true;

        } else {
            console.log("Item is not present in the set");
            return false;
        }
    }

    // size of the set
    this.size = function() {
        return collection.length;
    }

}

const dataset = new mydataset();

console.log("--mydataset--", dataset.size());
console.log("--mydataset--", dataset.add("itemone"));
console.log("--mydataset--", dataset.has("itemthree"));
console.log("--mydataset--", dataset.add("itemthree"));
console.log("--mydataset--", dataset.size());
console.log("--mydataset--", dataset.remove("itemthree"));
console.log("--mydataset--", dataset.size());












