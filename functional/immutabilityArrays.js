const numbers = [1, 2, 3, 4, 5];
/*
* adding
* */
const simpleAdd = [ 0.5, ...numbers, 6 ];
const index = numbers.indexOf(4);
const addInBetween = [ ...numbers.slice( 0, index ), 3.4, ...numbers.slice(index) ]; // between 3 and 4
console.group('Adding');
console.log(numbers);
console.log(simpleAdd);
console.log(index);
console.log(addInBetween);
console.groupEnd();
/*
* removing
* */
const removed = numbers.filter(n => n !== 2);
console.group('Removing');
console.log(removed);
console.log(numbers);
console.groupEnd();
/*
* updating
* */
const updated = numbers.map(
    (num) => {
        return num === 2 ? 22 : num;
    }
);
console.group('Updating');
console.log(updated);
console.groupEnd();
