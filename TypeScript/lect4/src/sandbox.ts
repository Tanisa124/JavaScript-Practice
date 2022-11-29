// Dynamic Types
let age: any = 25; 

age = true;
console.log(age);

age = 'hello';
console.log(age);

age = { name: 'thaen' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(true)
console.log(mixed)

// How dynamic type can cause trouble
let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 }
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);


// Function basics
let greet = () => {
    console.log('hello, world');
}

// ? is to make parameter optional (cannot put ? and initial parameter together)
const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a+b)
    console.log(c)
    console.log(a+b+Number(c))
    console.log('--------')
}

add(5,10)
add(10,15,'20')

const minus = (a: number, b: number) => {
    return a + b
}

let result = minus(10, 7);
console.log(result)

// Type Aliaases
const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const Greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} say hello`)
}

//making type on our own
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const GreetRemake = (user: {name: string, uid: StringOrNum}) => {
    console.log(`${user.name} say hello`)
}

const GreetRemakeAgain = (user: objWithName) => {
    console.log(`${user.name} say hello`)
}
