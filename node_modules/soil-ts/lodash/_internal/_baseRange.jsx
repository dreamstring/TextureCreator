function baseRange(start, end, step, fromRight) {
    var index = -1;
    var length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    var result = new Array(length);
    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}
export default baseRange;
