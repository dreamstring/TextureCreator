function findIndex(array, predicate) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
export default findIndex;
