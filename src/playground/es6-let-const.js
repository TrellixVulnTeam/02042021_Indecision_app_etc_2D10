var nameVar = 'Andrew';
nameVar = 'David'
console.log('nameVar', nameVar);

let nameLet = "Jeff";
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Seunghun Bang';
let firstName; 

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);