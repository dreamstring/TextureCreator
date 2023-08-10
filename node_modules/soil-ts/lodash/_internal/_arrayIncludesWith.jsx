function arrayIncludesWith(array, target, comparator) {
    if (array == null) {
        return false;
    }
    var index = -1;
    var length = array.length;
    while (++index < length) {
        var value = array[index];
        if (comparator(target, value)) {
            return true;
        }
    }
    return false;
}
export default arrayIncludesWith;
