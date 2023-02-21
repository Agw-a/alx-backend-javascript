const fs = require('fs');

const countStudents = (file_path) => new Promise((resolve, reject) => {
    fs.readFile(file_path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const dataFile = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const hash = {};
        const hash_names = dataFile[0].split(',');
        const student_names = hash_names
          .slice(0, hash_names.length - 1);
  
        for (const line of dataFile.slice(1)) {
          const hash_records = line.split(',');
          const student_values = hash_records
            .slice(0, hash_records.length - 1);
          const field = hash_records[hash_records.length - 1];
          if (!Object.keys(hash).includes(field)) {
            hash[field] = [];
          }
          const hash_entries = student_names
            .map((propName, idx) => [propName, student_values[idx]]);
          hash[field].push(Object.fromEntries(hash_entries));
        }
  
        const total_students = Object
          .values(hash)
          .reduce((pre, cur) => (pre || []).length + cur.length);
        console.log(`Number of students: ${total_students}`);
        for (const [field, group] of Object.entries(hash)) {
          const studentNames = group.map((student) => student.firstname).join(', ');
          console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        }
        resolve(true);
      }
    });
  });
  
module.exports = countStudents;
