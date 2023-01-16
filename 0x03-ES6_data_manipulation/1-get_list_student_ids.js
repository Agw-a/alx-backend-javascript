export default function getListStudentIds(listStudentIds) {
  const result = Array.isArray(listStudentIds);
  if (!result) return [];
  return listStudentIds.map((stdnt) => stdnt.id);
}
