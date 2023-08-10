function filter(array, predicate) {
    var index = -1;
    var resIndex = 0;
    var length = array == null ? 0 : array.length;
    var result = [];
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
export default filter;
