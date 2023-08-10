import isIndex from "./_internal/_isIndex";
function nth(array, n) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return;
    }
    n += n < 0 ? length : 0;
    return isIndex(n, length) ? array[n] : undefined;
}
export default nth;
