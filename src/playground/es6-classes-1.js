// car
// make company
// model
// vin
// getDescribtion


// Setop constructor to take name and age (default to 0)
// getDescription - string - Seunghun is 23 year(s) old.


class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return 'Hi! I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    honeLocation() {
        return !!this.location;
    }
    getGretting() {
        let greeting = super.getGretting();

        if(this.honeLocation()) {
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}
const me = new Traveler('Seunghun Bang', 23, 'Helsinki');
const other = new Traveler();

console.log(me.getGretting());
console.log(other.getGretting());
