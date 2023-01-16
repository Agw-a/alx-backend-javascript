export default function getStudentIdsSum(listStudents) {
  const sum = listStudents.reduce((acc, currentVal) => acc + currentVal.id, 0);
  return sum;
}
