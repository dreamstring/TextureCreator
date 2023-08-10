function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length;
    var index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
export default baseFindIndex;
