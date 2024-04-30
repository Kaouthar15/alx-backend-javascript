import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      let responseMessage = 'This is the list of our students';
      const studentData = await readDatabase(request.dbFile);
      for (const field in studentData) {
        if (studentData[field]) {
          responseMessage += `\nNumber of students in ${field}: ${studentData[field].length}. List: ${studentData[field].join(', ')}`;
        }
      }
      response.status(200).send(responseMessage);
      return response;
    } catch (error) {
      response.status(500).send(error.message);
      return response;
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const studentData = await readDatabase(request.dbFile);
      const { major } = request.params;
      if (major === 'CS' || major === 'SWE') {
        response.status(200).send(`List: ${studentData[major].join(', ')}`);
        return response;
      }
      response.status(500).send('Major parameter must be CS or SWE');
      return response;
    } catch (error) {
      response.status(500).send(error.message);
      return response;
    }
  }
}
