import baseIndexOf from "./_baseIndexOf";
function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
}
export default arrayIncludes;
