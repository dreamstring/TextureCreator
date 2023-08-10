function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1;
    var length = array.length;
    while (++index < length) {
        if (array[index] === value) {
            return index;
        }
    }
    return -1;
}
export default strictIndexOf;
