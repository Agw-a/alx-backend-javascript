const express = require('express');
const fs = require('fs');

const app = express();
const listen_port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (file_path) => new Promise((resolve, reject) => {
    if (!file_path) {
      reject(new Error('Cannot load the database'));
    }
    if (file_path) {
      fs.readFile(file_path, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const dataArr = [];
          const dataFile = data.toString('utf-8').trim().split('\n');
          const hash = {};
          const hash_names = dataFile[0].split(',');
          const student_names = hash_names.slice(
            0,
            hash_names.length - 1,
          );
  
          for (const line of dataFile.slice(1)) {
            const hash_records = line.split(',');
            const student_values = hash_records.slice(
              0,
              hash_records.length - 1,
            );
            const field = hash_records[hash_records.length - 1];
            if (!Object.keys(hash).includes(field)) {
              hash[field] = [];
            }
            const hash_entries = student_names.map((propName, idx) => [
              propName,
              student_values[idx],
            ]);
            hash[field].push(Object.fromEntries(hash_entries));
          }
  
          const total_students = Object.values(hash).reduce(
            (pre, cur) => (pre || []).length + cur.length,
          );
          dataArr.push(`Number of students: ${total_students}`);
          for (const [field, group] of Object.entries(hash)) {
            dataArr.push([
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' '));
          }
          resolve(dataArr.join('\n'));
        }
      });
    }
  });
  
  app.get('/', (_, res) => {
    res.send('Hello Holberton School!');
  });
  
  app.get('/students', (_, res) => {
    const responseParts = ['This is the list of our students'];
  
    countStudents(DB_FILE)
      .then((report) => {
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      })
      .catch((err) => {
        responseParts.push(err instanceof Error ? err.message : err.toString());
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      });
  });
  
  app.listen(listen_port, () => {
    console.log(`Server listening on PORT ${listen_port}`);
  });
  
  module.exports = app;