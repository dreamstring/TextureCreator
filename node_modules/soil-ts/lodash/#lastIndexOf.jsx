import baseFindIndex from "./_internal/_baseFindIndex";
import baseIsNaN from "./_internal/_baseIsNaN";
import strictLastIndexOf from "./_internal/_strictLastIndexOf";
import toInteger from "./#toInteger";
function lastIndexOf(array, value, fromIndex) {
    var length = array.length;
    if (length === 0) {
        return -1;
    }
    var index = length;
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
    }
    return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
}
export default lastIndexOf;
