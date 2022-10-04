let ninjas = ['thaen','shaun','ryu','chun-li'];

console.log(ninjas);

ninjas[1] = 'ken'
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2])

let random = ['thaen','fern',30,20];
console.log(random)

console.log(random.length)

//array methods

let result = ninjas.join(',');
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

//add member in list but not original value
result = ninjas.concat(['ken','crystal']);
console.log(result);
console.log(ninjas);

//add member and change original value
ninjas.push('Jim')
console.log(ninjas)