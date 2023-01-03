export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades
) {
  const sameCity = listStudents.filter((stdts) => stdts.location === city);
  sameCity.map((student) => {
    const studentGrade = newGrades
      .filter((newStudent) => newStudent.studentId === student.id)
      .map((i) => i.grade)[0];
    const grade = studentGrade || "N/A";
    return { ...student, grade };
  });
}
