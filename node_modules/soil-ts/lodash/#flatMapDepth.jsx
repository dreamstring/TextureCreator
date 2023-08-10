import baseFlatten from "./_internal/_baseFlatten";
import map from "./#map";
function flatMapDepth(array, iteratee, depth) {
    depth = depth === undefined ? 1 : +depth;
    var values = map(array, iteratee);
    return baseFlatten(values, depth);
}
export default flatMapDepth;
