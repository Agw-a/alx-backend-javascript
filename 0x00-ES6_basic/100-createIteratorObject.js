export default function createIteratorObject(report) {

    const empls = []

    for (const dep of Object.keys(report.allEmployees)) {

        for (const emp of report.allEmployees[dep]) {

            empls.push(emp)
        }
    }
    return empls;
}