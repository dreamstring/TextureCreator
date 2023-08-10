function reduceRight(array, iteratee, initialValue) {
    var length = array.length;
    if (length === 0 && initialValue === undefined) {
        return undefined;
    }
    var accumulator = initialValue === undefined ? array[0] : initialValue;
    var startIndex = initialValue === undefined ? 0 : -1;
    while (startIndex < length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
}
export default reduceRight;
