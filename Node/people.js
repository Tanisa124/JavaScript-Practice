const people = ['thaen', 'yoshi', 'ryu', 'chun-li', 'mario']; // array of string
const ages = [20,25,30,35];

console.log(people);

// module.exports = people // export value to another file (can write anything)

module.exports = {
    people: people,
    ages: ages
}