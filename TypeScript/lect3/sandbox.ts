// arrays
let names = ['thaen', 'mario', 'yoshi'];

names.push('toad');
// Type 'number' is not assignable to type 'string' 
// names.push(3);
// names[0] = 3;

let numbers = [10,20,30,40];
// Argument of type 'string' is not assignable to parameter of type 'number'
// numbers.push('shuan')
// numbers[1] = 'shuan'

let mixed = ['ken', 4, 'chun-li', 8 , 9];
mixed.push('ryu')
mixed.push(10);
mixed[0] = 3;

let test: Array<string | number> = [];
test.push(1)
test.push('hi')


// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
};

ninja.age = 40;
// ninja.name = 40;
ninja.name = 'ryu'

// explicit types
let charater: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi;
age = 30;

//isLoggedIn = 25;
isLoggedIn = true;

//arrays
let ninjas: string[] = [];
ninjas.push('thaen')

// union types
let mix: (string|number)[] = [];
mix.push(10);
mix.push('thaen');
// mix.push(true)  

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
}


