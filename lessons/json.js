const fs = require('fs');


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// Convert an object to JSON
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// Convert JSON to object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

const bookJSON = JSON.stringify(book);
fs.writeFileSync('json.json', bookJSON);


const dataBuffer = fs.readFileSync('json.json');
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

