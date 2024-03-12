export default function getStudentsByLocation(studentsList, city) {
  const cityStudents = studentsList.filter((student) => student.location === city);
  return cityStudents;
}
