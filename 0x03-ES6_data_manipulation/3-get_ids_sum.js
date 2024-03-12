export default function getStudentIdsSum(studentList) {
  const idSum = studentList.reduce((currentTotal, student) => student.id + currentTotal, 0);
  // 0 starting point - first iteration 0 + student.id
  return idSum;
}
