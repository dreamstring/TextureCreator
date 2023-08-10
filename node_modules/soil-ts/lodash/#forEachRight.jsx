function forEachRight(array, iteratee) {
    var length = array.length;
    while (length--) {
        if (iteratee(array[length], length, array) === false) {
            break;
        }
    }
    return array;
}
export default forEachRight;
