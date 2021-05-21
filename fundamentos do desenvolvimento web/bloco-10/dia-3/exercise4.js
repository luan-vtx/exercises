const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.substr(0, 1);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};