//for loops

for (let i = 0; i < 5; i++){
    console.log(i)
}

const names = ['thaen','shuan','luigi'];

for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

//and operator
const password = 'p@ss';

if (password.length > 3 && password.includes('@')){
    console.log('password is valid')
} else {
    console.log('password is not valid')
}

//or operator
let hi = 'hi'
if (hi=='hi' || hi.length >= 0){
    console.log(hi)
}

hi = 'not hi'
if (hi=='hi' || hi.length >= 0){
    console.log(hi)
}