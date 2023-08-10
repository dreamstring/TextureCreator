function arrayPush(array, values) {
    var index = -1;
    var length = values.length;
    var offset = array.length;
    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}
export default arrayPush;
