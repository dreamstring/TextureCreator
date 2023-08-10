import baseFlatten from "./_internal/_baseFlatten";
function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
export default flatten;
