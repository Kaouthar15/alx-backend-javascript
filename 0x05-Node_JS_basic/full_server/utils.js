const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
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
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
