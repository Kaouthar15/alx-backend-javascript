export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeesNames = [];
  for (const key in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, key)) {
      const allDepartEmployees = employees[key];
      for (const name of allDepartEmployees) {
        employeesNames.push(name);
      }
    }
  }
  return employeesNames;
}
