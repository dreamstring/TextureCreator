import baseFor from "./_baseFor";
import keys from "../#keys";
function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
export default baseForOwn;
