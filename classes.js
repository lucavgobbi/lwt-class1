/**
 * Created by lucavgobbi on 2015-10-12.
 */
"use strict";

/**
 * UserAsClass
 * Defines a class (ES6)
 */
class UserAsClass {
    constructor(options) {
        "use strict";
        this.name = options.name;
        this.age = options.age;
    }

    toString () {
        "use strict";
        return this.name + " is " + this.age + " years old";
    }

    whoIAm () {
        return "I'm a class";
    }

    static someStatic (name) {
        return "I would be " + name;
    }
}

/**
 * UserAsPrototype
 * Defines a prototype (ES5)
 */
var userAsPrototype = function (options) {
    this.name = options.name;
    this.age = options.age;
};

userAsPrototype.prototype.toString = function () {
    return this.name + " is " + this.age + " years old";
};

userAsPrototype.prototype.whoIAm = function () {
    return "I'm a prototype";
};

userAsPrototype.someStatic = function (name) {
    return "I would be " + name;
};



// Instantiate UserAsClass
var userAsClassInstance = new UserAsClass({ name: "Luca", age: "26" });

// Instantiate UserAsPrototype
var userAsPrototypeInstance = new userAsPrototype({ name: "Luca", age: "26" });


console.log(userAsClassInstance.whoIAm());
console.log(userAsClassInstance.toString());
console.log(UserAsClass.someStatic("John"));

console.log(userAsPrototypeInstance.whoIAm());
console.log(userAsPrototypeInstance.toString());
console.log(userAsPrototype.someStatic("John"));

