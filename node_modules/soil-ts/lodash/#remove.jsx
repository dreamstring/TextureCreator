import basePullAt from "./_internal/_basePullAt";
function remove(array, predicate) {
    var result = [];
    if (!(array != null && array.length)) {
        return result;
    }
    var index = -1;
    var indexes = [];
    var length = array.length;
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result.push(value);
            indexes.push(index);
        }
    }
    basePullAt(array, indexes);
    return result;
}
export default remove;
