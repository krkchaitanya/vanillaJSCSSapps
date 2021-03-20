
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