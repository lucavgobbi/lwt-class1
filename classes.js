/**
 * Created by lucavgobbi on 2015-10-12.
 */
"use strict";

/**
 * PersonAsClass
 * Defines a class (ES6)
 */
class PersonAsClass {
    constructor(options) {
        "use strict";
        this.name = options.name;
        this.weight = options.weight;
        this.height = options.height;
    }

    walk (steps) {
        // Supose that each step can walk 1/3 of the height
        return steps * this.height / 3;
    }

    sleep () {
        return this.name + " slept for 1h";
    }

    toString () {
        "use strict";
        return this.name + " is " + this.weight + "m tall";
    }

    whoIAm () {
        return "I'm a class";
    }

    static someStatic (name) {
        return "I would be " + name;
    }
}

/**
 * personAsPrototype
 * Defines a prototype (ES5)
 */
var personAsPrototype = function (options) {
    this.name = options.name;
    this.weight = options.weight;
    this.height = options.height;
};

personAsPrototype.prototype.walk = function (steps) {
    // Supose that each step can walk 1/3 of the height
    return steps * this.height / 3;
};

personAsPrototype.prototype.sleep = function () {
    return this.name + " slept for 1h";
};

personAsPrototype.prototype.toString = function () {
    return this.name + " is " + this.weight + "m tall";
};

personAsPrototype.prototype.whoIAm = function () {
    return "I'm a prototype";
};

personAsPrototype.someStatic = function (name) {
    return "I would be " + name;
};



// Instantiate PersonAsClass
var meAsClass = new PersonAsClass({ name: "Luca", height: 1.7, weight: 60 });
var youAsClass = new PersonAsClass({ name: "Luca", height: 1.78, weight: 71 });

// Instantiate PersonAsPrototype
var meAsPrototype = new personAsPrototype({ name: "Luca", height: 1.7, weight: 60 });
var youAsPrototype = new personAsPrototype({ name: "You", height: 1.78, weight: 71 });


console.log(meAsClass.whoIAm());
console.log(meAsClass.walk(5));
console.log(meAsClass.toString());
console.log(PersonAsClass.someStatic("John"));

console.log(youAsClass.whoIAm());
console.log(youAsClass.walk(5));
console.log(youAsClass.toString());
console.log(PersonAsClass.someStatic("John"));

console.log(meAsPrototype.whoIAm());
console.log(meAsPrototype.walk());
console.log(meAsPrototype.toString());
console.log(personAsPrototype.someStatic("John"));

console.log(youAsPrototype.whoIAm());
console.log(youAsPrototype.walk());
console.log(youAsPrototype.toString());
console.log(personAsPrototype.someStatic("John"));