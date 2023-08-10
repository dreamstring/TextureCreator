import slice from "./#slice";
import toInteger from "./#toInteger";
function dropRight(array, n) {
    if (n === void 0) { n = 1; }
    var length = array == null ? 0 : array.length;
    n = length - toInteger(n);
    return length ? slice(array, 0, n < 0 ? 0 : n) : [];
}
export default dropRight;
