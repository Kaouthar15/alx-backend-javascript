const express = require('express');
const fs = require('fs');
const process = require('process');

const app = express();
const port = 1245;
const dbFile = process.argv[2];

async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        let returnedStr = '';
        const studentData = [];
        const fields = {};
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        /** Deleting the first line  */
        lines.splice(0, 1);
        lines.forEach((line) => {
          const elements = line.split(',');
          if (elements.length < 4) {
            return;
          }
          studentData.push({
            firstName: elements[0],
            lastName: elements[1],
            age: elements[2],
            field: elements[3],
          });
        });
        for (const student of studentData) {
          if (!fields[student.field]) {
            fields[student.field] = [];
          }
          fields[student.field].push(student.firstName);
        }
        returnedStr += `Number of students: ${studentData.length}\n`;
        for (const field in fields) {
          if (fields[field]) {
            returnedStr += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }
        // Deleting the last newline character
        returnedStr = returnedStr.slice(0, -1);
        resolve(returnedStr);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentData = await countStudents(dbFile);
    res.statusCode = 200;
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.statusCode = 500;
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port);

module.exports = app;
