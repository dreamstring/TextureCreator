function slice(array, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    start = start == null ? 0 : start;
    end = end === undefined ? length : end;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : (end - start) >>> 0;
    start >>>= 0;
    var index = -1;
    var result = new Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
export default slice;
