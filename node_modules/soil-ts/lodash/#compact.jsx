function compact(array) {
    var index = -1, length = array.length, resIndex = 0, result = [];
    while (++index < length) {
        var value = array[index];
        if (value) {
            result[resIndex++] = value;
        }
    }
    return result;
}
export default compact;
