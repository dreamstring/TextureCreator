import baseIndexOf from "./_internal/_baseIndexOf";
import toInteger from "./#toInteger";
function indexOf(array, value, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
        index = Math.max(length + index, 0);
    }
    return baseIndexOf(array, value, index);
}
export default indexOf;
