function minBy(array, iteratee) {
    var result;
    var index = -1;
    var computed;
    var length = array.length;
    while (++index < length) {
        var value = array[index];
        var current = iteratee(value);
        if (current != null && (computed === undefined ? current === current : current < computed)) {
            computed = current;
            result = value;
        }
    }
    return result;
}
export default minBy;
