/*
* function is pure only when function is called when called with same arguments,
* always returns same results
* */
const notPureFunction = (num) => {
  return num + Math.random();
}
console.log(notPureFunction(500));

const pureFunction = num => num + 5
console.log(pureFunction(1));

/*
* isEligibleNotPure is NOT pure,
* because minAge is outside of function and can change - is unpredictable
* */
const minAge = 18;
const isEligibleNotPure = (age) => {
  return age > minAge;
}
console.log(isEligibleNotPure(4));

const isEligiblePure = (age, minAge) => {
  return age > minAge;
}
console.log(isEligiblePure(4, 18));
