import slice from "./#slice";
function initial(array) {
    var length = array == null ? 0 : array.length;
    return length ? slice(array, 0, -1) : [];
}
export default initial;
