//
// // function composition
// let input = '   JS   ';
// let output = `<div>${input.trim()}</div>`;
// // console.log(output);
//
// const trim = str => str.trim();
// const trimmer = (str) => {
//     return str.trim();
// }
// const wrapInDiver = (str) => {
//     return `<div>${str}</div>`;
// }
// const wrapInDiv = str => `<div>${str}</div>`;
// const toLowercase = (str) => {
//     return str.toLowerCase()
// }
//
// const result = wrapInDiv(trim(input));
// const result2 = wrapInDiver(toLowercase(trimmer(input)));
//
// // console.log(trim);
// // console.log(trimmer);
// // console.log(wrapInDiv);
// console.log(result);
// console.log(result2);
// console.log(toLowercase(''));
//
