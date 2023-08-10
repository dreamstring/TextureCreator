import baseFlatten from "./_internal/_baseFlatten";
import map from "./#map";
function flatMap(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), 1);
}
export default flatMap;
