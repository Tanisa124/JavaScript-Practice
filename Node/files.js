const fs = require('fs');


// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data); // return buffer
    console.log(data.toString());
})

console.log('last line') // read file take time so this come first

// writing files
// fs.writeFile('./docs/blog1.txt','hello, maou sama!!') original
fs.writeFile('./docs/blog1.txt', 'greeting, maou sama!!!', () => {
    console.log('file was written');
});

// directoreis
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted')
    })
}


// deleting files
if (!fs.existsSync('./docs/deleteme.txt')){
    fs.writeFile('./docs/deleteme.txt', "" , (err) => {
        if (err) {
            console.log(err);
        }
        console.log('text file created')
    }) // crating one file contain empty string
}

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('delete deleteme.txt complete!!')
    })
}

