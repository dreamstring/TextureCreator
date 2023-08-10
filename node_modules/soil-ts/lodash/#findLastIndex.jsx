import baseFindIndex from "./_internal/_baseFindIndex";
import toInteger from "./#toInteger";
function findLastIndex(array, predicate, fromIndex) {
    var length = array.length;
    if (length === 0) {
        return -1;
    }
    var index = length - 1;
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
    }
    return baseFindIndex(array, predicate, index, true);
}
export default findLastIndex;
