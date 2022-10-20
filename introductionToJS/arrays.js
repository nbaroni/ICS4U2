// join
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.join());
console.log(fruits.join('--')); //converts the array to a string

// push
fruits.push('Kiwi');
console.log(fruits.join());
fruits.push(['Strawberry', 'Blueberry']); //you can add strings or arrays!
console.log(fruits.join());
// fruits.push(5);

// pop
console.log(fruits.pop()); 
//it popped the array stored on the array. Always pops the last element
console.log(fruits.join());

// shift
console.log(fruits.shift())
//pop gets rid of from the right and shift gets rid of it from the left
console.log(fruits.join())

//console.log(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.push(fruits.join(' '))))))))))))))))));

// unshift
fruits.unshift('Fred');
fruits.join;

// concat
fruits = fruits.concat(['Pear', 'Apple']);
let citruis = fruits.slice(3);
console.log(citruis);
console.log(fruits);

for (let i = 0; i < 1000; i++) {
    fruits.push('banana');
}
console.warn(fruits);

// slice


 
let citrus = fruits.slice(3);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");