import baseFlatten from "./_internal/_baseFlatten";
function flattenDepth(array, depth) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    depth = depth === undefined ? 1 : +depth;
    return baseFlatten(array, depth);
}
export default flattenDepth;
