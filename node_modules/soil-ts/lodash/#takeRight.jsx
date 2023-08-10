import slice from "./#slice";
function takeRight(array, n) {
    if (n === void 0) { n = 1; }
    var length = array.length;
    if (length === 0) {
        return [];
    }
    n = length - n;
    return slice(array, n < 0 ? 0 : n, length);
}
export default takeRight;
