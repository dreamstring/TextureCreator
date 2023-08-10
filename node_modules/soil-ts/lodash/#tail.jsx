import slice from "./#slice";
function tail(array) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    return slice(array, 1);
}
export default tail;
