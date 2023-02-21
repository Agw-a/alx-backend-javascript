const fs = require('fs')

/**
 * param {String} filePath -> path
 */
const countStudents = (filePath) => {
    if (!fs.existsSync(filePath)) {
        throw new Error('Cannot load the database')
    }
    if (!fs.statSync(filePath).isFile()) {
        throw new Error('Cannot load the database')
    }
    const readLines = fs.readFileSync(filePath, 'utf-8').toString('utf-8').trim().split('\n')
    const stdts = {};
    const names = readLines[0].split(',');
    const stdNames = names.slice(0, names.length)
}

module.exports = countStudents;