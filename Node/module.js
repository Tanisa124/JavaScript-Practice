const People = require('./people'); // when require node run that file

console.log(People); // return empty object (before write export in people.js)
// console.log(people); error cause people is not define

console.log(People.people, People.ages);

// assign to each variable
const { people, ages } = require('./people');
console.log(people, ages)

// const os = require('os');

// console.log(os.platform(), os.homedir());
