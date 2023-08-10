import { INFINITY } from "./basic/_global";
import baseFlatten from "./_internal/_baseFlatten";
import map from "./#map";
function flatMapDeep(array, iteratee) {
    return baseFlatten(map(array, iteratee), INFINITY);
}
export default flatMapDeep;
