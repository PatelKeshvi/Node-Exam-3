const fs = require('fs');

//Create File
fs.writeFile("index.txt", "tesing", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("File Written Successfully")
    }
})

//Read File
fs.readFile("index.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
})

//Update File
fs.appendFile("index.txt", "\n node", (err) => {
    if (err) {
        console.log("err.message");
    } else {
        console.log("Data Added");
    }
})

// Delete File
fs.unlink("index.txt", (err) => {
    if (err) {
        console.log("err.message");
    } else {
        console.log("unlinked successfully")
    }
})