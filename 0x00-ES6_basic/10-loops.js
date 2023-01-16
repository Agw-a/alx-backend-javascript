export default function appendToEachArrayValue(array, appendString) {
  const appendRes = [];
  for (const idx of array) {
    appendRes.push(appendString + idx)
  }

  return appendRes;
}
