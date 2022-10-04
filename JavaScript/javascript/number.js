let radius = 10;
const pi = 3.14;
console.log(radius,pi)

// math operators +, -, *, /, **, %

console.log(10/2);
let result = pi * radius **2;

console.log(result);

// order of operation - B I D M A S
// Bracket, Itency (**), Division, multiplication, addition, subtraction

result = 5 * (10-3)**2;

console.log(result);

let likes = 10;

likes++;
console.log(likes);

likes--;
console.log(likes);

likes += 10;
console.log(likes);

likes -= 12;
console.log(likes);


//string cannot use number operator
let word = 'hi';

word *= 2;

console.log(word);

//however, string can add number in it

word = 'hi';
word = word + ' '+ 2;
console.log(word)

//template string
result = `I came to say ${word} you guys!!`
console.log(result)

