// arguments object - no longer bound with arrow functions 

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


// this keyword - no longer bound with arrow functions 

const user = {
    name: 'Seunghun',
    cities: ['Seoul', 'Yongin', 'Oswestry', 'Helsinki'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!')
}
}
console.log(user.printPlacesLived());


// Challenge area

const muliplier = {
    // numbers - array of numers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1,2,3,4,5],
    multyplyBy: 16,
    multiply() {
        return this.numbers.map((number) => this.multyplyBy * number + ' is the result!');
    }
};

console.log(muliplier.multiply());