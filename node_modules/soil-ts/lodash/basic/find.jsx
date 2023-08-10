function find(array, predicate) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            return value;
        }
    }
}
export default find;
