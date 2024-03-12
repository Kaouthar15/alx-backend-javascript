export default function getListStudentIds(studentsList) {
  if (Array.isArray(studentsList)) {
    const idsList = studentsList.map((student) => student.id);
    return idsList;
  }
  return [];
}
