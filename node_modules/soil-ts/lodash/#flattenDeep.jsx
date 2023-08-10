import { INFINITY } from "./basic/_global";
import baseFlatten from "./_internal/_baseFlatten";
function flattenDeep(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, INFINITY) : [];
}
export default flattenDeep;
