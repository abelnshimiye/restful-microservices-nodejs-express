const fs = require('fs')

const readfile = (filename) => {
    fs.readFile(filename, (error, data) => {
        if (error) {
            return console.log("Error reading file", error.message)
        }
        console.log(data)
    }

    )
}

readfile("input.txt")