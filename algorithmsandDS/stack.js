
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


/*
--------------------
------ Stack -------
--------------------
*/

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


    // return all the elements present in the set
    this.values = function() {
        return collection;
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


    // Union
    this.union = function(inputset) {

        var unionset = new mydataset();
        var firstset = this.values();
        var secondset = inputset.values();

        firstset.forEach(function(e) { unionset.add(e) });
        secondset.forEach(function(e) { unionset.add(e) });

        return unionset;
    }


    // intersection
    this.intersection = function(otherset) {

        var intersectionSet = new mydataset();
        var currentsetVals = this.values();

        currentsetVals.forEach(function(elem) {
            if(otherset.has(elem)) {
                intersectionSet.add(elem);
            }
        });

        return intersectionSet.values();
    }


    // difference
    this.difference = function(otherset) {

        var differenceset = new Set();
        var currentset = this.values();

        currentset.forEach(function(elem) {
            if(!otherset.has(elem)) {
                differenceset.add(elem);
            }
        });

        otherset.values().forEach(function(elem) {
            if(!differenceset.has(elem) && !currentset.includes(elem)) {
                differenceset.add(elem);
            }
        })

        return differenceset.values();
    }


    // isSubset
    this.issubset = function(otherset) {

        var newResultSet = new Set();
        var currentset = this.values();

        currentset.forEach(function(elem) {
            if(otherset.has(elem)) {
                newResultSet.add(elem);
            }
        });

        return newResultSet.size === otherset.size ? true : false;

    }

}






/*
------- Validations -------
*/

const dataset = new mydataset();

console.log("--mydataset--", dataset.size());
console.log("--mydataset--", dataset.add("itemone"));
console.log("--mydataset--", dataset.has("itemthree"));
console.log("--mydataset--", dataset.add("itemthree"));
console.log("--mydataset--", dataset.size());
console.log("--mydataset--", dataset.remove("itemthree"));
console.log("--mydataset--", dataset.add("itemtwo"));
console.log("--mydataset--", dataset.size());

var seconddataset = new mydataset();

seconddataset.add("secondone");

var unionsetresults = dataset.union(seconddataset);
console.log(" -- unionsetresults -- ", unionsetresults.values());


var set1 = new mydataset();
set1.add("one");
set1.add("two");
set1.add("three");

var set2 = new mydataset();
set2.add("one");
set2.add("three");

var intersectionResult = set1.intersection(set2);
console.log(" -- intersectionResult -- ", intersectionResult);

var differenceResult = set1.difference(set2);
console.log(" --differenceResult-- ", differenceResult);


var subst = new Set();
subst.add("one");
subst.add("two");
var isitasubset = set1.issubset(subst);
console.log(" --isitasubset-- ", isitasubset);