const addIt = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
const refactoredAddIt = num1 => num2 => num1 + num2;
console.log( addIt(2)(2) );
console.log( refactoredAddIt(3)(2) );