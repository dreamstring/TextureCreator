import slice from "./#slice";
import toInteger from "./#toInteger";
function drop(array, n) {
    if (n === void 0) { n = 1; }
    var length = array == null ? 0 : array.length;
    return length ? slice(array, n < 0 ? 0 : toInteger(n), length) : [];
}
export default drop;
