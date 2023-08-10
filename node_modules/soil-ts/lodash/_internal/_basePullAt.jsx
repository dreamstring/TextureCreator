import baseUnset from "./_baseUnset";
import isIndex from "./_isIndex";
function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0;
    var lastIndex = length - 1;
    while (length--) {
        var previous = void 0;
        var index = indexes[length];
        if (length === lastIndex || index !== previous) {
            previous = index;
            if (isIndex(index)) {
                array.splice(index, 1);
            }
            else {
                baseUnset(array, index);
            }
        }
    }
    return array;
}
export default basePullAt;
