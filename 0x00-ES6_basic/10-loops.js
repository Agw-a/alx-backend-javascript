export default function appendToEachArrayValue(array, appendString) {
    const appendRes = [];
    for (let idx of array) {
        appendRes.push(appendString + idx)
    }

    return appendRes;
}