// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'thaen@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlogs: function(){
        this.blogs.forEach((article, index) => console.log(`this is my ${index+1} article which topic is ${article}`))
    }
};

console.log(user)
console.log(user.name)
user.login()
user.logBlogs()

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = {name: 'thaen', age: 30};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 15;

console.log(userOne,userTwo);