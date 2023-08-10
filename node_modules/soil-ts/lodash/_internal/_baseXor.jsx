import baseDifference from "./_baseDifference.js";
import baseFlatten from "./_baseFlatten.js";
import baseUniq from "./_baseUniq.js";
function baseXor(arrays, iteratee, comparator) {
    var length = arrays.length;
    if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
    }
    var index = -1;
    var result = new Array(length);
    while (++index < length) {
        var array = arrays[index];
        var othIndex = -1;
        while (++othIndex < length) {
            if (othIndex != index) {
                result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
            }
        }
    }
    return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}
export default baseXor;
