import slice from "./#slice";
import toInteger from "./#toInteger";
function chunk(array, size) {
    if (size === void 0) { size = 1; }
    size = Math.max(toInteger(size), 0);
    var length = array == null ? 0 : array.length;
    if (!length || size < 1) {
        return [];
    }
    var index = 0;
    var resIndex = 0;
    var result = new Array(Math.ceil(length / size));
    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size));
    }
    return result;
}
export default chunk;
