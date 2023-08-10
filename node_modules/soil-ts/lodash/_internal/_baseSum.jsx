function baseSum(array, iteratee) {
    var index = -1, length = array.length, result;
    while (++index < length) {
        var value = array[index];
        var current = iteratee(value);
        if (current !== undefined) {
            result = result === undefined ? current : result + current;
        }
    }
    return result;
}
export default baseSum;
