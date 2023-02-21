const fs = require('fs')

const readDatabase = (file_path) => new Promise((resolve, reject) => {
    if (!file_path) {
        reject(new Error('Cannot load the database'))
    }
    if (file_path) {
        fs.readFile(file_path, (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'))
            }
            if (data) {
                const fileData = data.toString('utf-8')
                .trim().split('\n');
                const hash = {}
                const hash_fields = fileData[0].split(',');
                const hash_names = hash_fields.slice(0, hash_fields.length - 1);

                for (let fileValue of fileData.slice(1)) {
                    const records = fileValue.split(',');
                    const dataValues = records.slice(0, records.length - 1);
                    const field = records[records.length - 1];
                    if (!Object.keys(hash).includes(field)) {
                        hash[field] = []
                    }
                    const student_entries = hash_names.map((name, index) =>
                [name, dataValues[index]]);
                hash[field].push(Object.fromEntries(student_entries))
                }
                resolve(hash)
            }
        })
    }
})

export default readDatabase;
module.exports = readDatabase;