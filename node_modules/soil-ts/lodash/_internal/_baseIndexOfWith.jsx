function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1;
    var length = array.length;
    while (++index < length) {
        if (comparator(array[index], value)) {
            return index;
        }
    }
    return -1;
}
export default baseIndexOfWith;
