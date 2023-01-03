export default function getStudentIdsSum(listStudents) {
    let sum = listStudents.reduce((acc, currentVal) => acc + currentVal.id, 0);
    return sum;
}