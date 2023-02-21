const fs = require('fs')

const countStudents = (filePath) => {
    if (!fs.existsSync(filePath)) {
        throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;