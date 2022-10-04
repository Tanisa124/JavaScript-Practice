// function declaration
function greet(){
    console.log('Hello World');
}

greet();


// function expression -> assign function to variable
const speak = function(){
    console.log('good day!');
};

speak();

// javascript can declare function wherever you want () use hoisting method (only function delcaration only)
hi()

function hi(){
    console.log('hi, this is how hoisting work!')
}

// arguments & parameters

function name1(name){
    console.log(`good day ${name}`);
}

name1('thaen')

// arrow function
const calArea = (radius) => {
    return 3.14 * radius ** 2;
};

const area = calArea(10);
console.log('area is:', area)

//practice
const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

const billArrow = (products, tax) => {
    let total = null;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total
};

console.log(bill([10,15,30],0.2))
console.log(billArrow([10,15,30],0.07))

// callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;;
    callbackFunc(value);
};

myFunc(function(value){
    // do something
    console.log(value);
});

let people = ['thaen','mario','luigi','ryu','chun-li'];

people.forEach(function(person){
    console.log(person);
});

console.log('---------')

//arrow function for foreach
people.forEach((person, index) => {console.log(index, person)})

//decrease complexity by subtract in two component
const logPerson = (person, index) => {console.log(`${index} - hello ${person}`)};
people.forEach(logPerson);















