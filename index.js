// import { compose, pipe } from 'lodash/fp';
const { compose, pipe } = require('lodash/fp')

// function composition
let input = '   JSA   ';
let output = `<div>${input.trim()}</div>`;
// console.log(output);
const trim = str => str.trim();
const trimmer = (str) => {
    return str.trim();
}
const wrapInDiver = (str) => {
    return `<div>${str}</div>`;
}
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => {
    return `<${type}>${str}</${type}>`;
}
const toLowercaseFn = (str) => {
    return str.toLowerCase();
}
// const result = wrapInDiv(trim(input));
// const result2 = wrapInDiver(toLowercaseFn(trimmer(input)));

// console.log(trim);
// console.log(trimmer);
// console.log(wrapInDiv);
// console.log(result);
// console.log(result2);
// console.log(toLowercase('EE'));
// const transform = compose( wrapInDiv, trim, toLowercaseFn );
// const transform = pipe( trim, toLowercaseFn, wrapInDiver );
const transform = pipe( trim, toLowercaseFn, wrap('dick') );
console.log(transform(input));