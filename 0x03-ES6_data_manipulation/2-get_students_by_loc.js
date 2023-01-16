export default function getStudentsByLocation(listStudentIds, city) {
  const result = listStudentIds.filter((stdnt) => stdnt.location === city);
  return result;
}
