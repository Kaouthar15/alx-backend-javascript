export default function iterateThroughObject(report) {
  let allEmployees = '';
  const reportLength = report.length;
  for (const employee of report) {
    allEmployees += `${employee}`;
    if (report.indexOf(employee) < reportLength - 1) {
      allEmployees += ' | ';
    }
  }
  return allEmployees;
}
