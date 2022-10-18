var greeting = 'Hello';

function test() {
    if (true) {
        let greeting = 'Hi';
    }
}

console.log(greeting);

/*
const TEST_VALUE = 6;
TEST_VALUE = 5;

*/

console.log(1 == '1'); //true
console.log(1 === '1'); //false
console.log(1 == true); //true
console.log(1 === true); //false

console.log(typeof (1));
console.log(typeof (true));


let number1 = 3;
let number2 = 7;
let sum = number1 + number2;

const result = number1 + " + " + number2 + " = " + sum;
console.log(result);

const result1 = `${number1} + ${number2} = ${sum}`;
console.log(result1);




function add(x, y, z) {
    //console.log(typeof (z))
    //return x + y + z;

    return x + y + (typeof (z) === 'undefined' ? 0 : z);
}

console.log(add(1, 2, 3));
console.log(add(1, 2));


const colours = ['red', 'yellow', 'green', 'blue'];
for (const colour of colours) {
    console.log(colour);
}


const car = {make: 'Ford', model: 'Mustang'}
for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`)
}


// these two do the same thing
console.log(car.make);
console.log(car['make']);




const room = {
    "id": "Kitchen",
    "name": "Kitchen",
    "description": "You are in a large kitchen, surrounded by pots and pans. There is an empty basket on the floor in front of you and an obsenely large vat in the corner of the room which seems quite heavy. ",
    "shortDescription": "You are in a large kitchen, surrounded by pots and pans. ",
    "exits": [
      {
        "isLocked": false,
        "direction": "East",
        "adjacentRoom": "Hallway11"
      },
      {
        "isLocked": false,
        "direction": "West",
        "adjacentRoom": "DininghallTopRight"
      }
    ]
}


