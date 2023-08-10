function forEach(array, iteratee) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
export default forEach;
