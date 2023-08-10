function reduce(array, iteratee, initialValue) {
    var length = array.length;
    if (length === 0 && initialValue === undefined) {
        return undefined;
    }
    var accumulator = initialValue === undefined ? array[0] : initialValue;
    var startIndex = initialValue === undefined ? 0 : -1;
    var currentIndex = startIndex;
    while (++currentIndex < length) {
        accumulator = iteratee(accumulator, array[currentIndex], currentIndex, array);
    }
    return accumulator;
}
export default reduce;
