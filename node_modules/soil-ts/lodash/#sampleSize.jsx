import copyArray from "./_internal/_copyArray";
import slice from "./#slice";
function sampleSize(array, n) {
    n = n == null ? 1 : n;
    var length = array == null ? 0 : array.length;
    if (!length || n < 1) {
        return [];
    }
    n = n > length ? length : n;
    var index = -1;
    var lastIndex = length - 1;
    var result = copyArray(array);
    while (++index < n) {
        var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
        var value = result[rand];
        result[rand] = result[index];
        result[index] = value;
    }
    return slice(result, 0, n);
}
export default sampleSize;
