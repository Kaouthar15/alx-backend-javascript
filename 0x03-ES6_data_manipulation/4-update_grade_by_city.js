export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // filtering the student by city
  const cityStudents = studentList.filter((student) => student.location === city);
  // Maping a new list tha contains the grades of the students
  const newList = cityStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => student.id === grade.studentId);
    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return newList;
}
