import baseIndexOf from "./_baseIndexOf";
import baseIndexOfWith from "./_baseIndexOfWith";
import copyArray from "./_copyArray";
import map from "../#map";
function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf;
    var length = values.length;
    var index = -1;
    var seen = array;
    if (array === values) {
        values = copyArray(values);
    }
    if (iteratee) {
        seen = map(array, function (value) { return iteratee(value); });
    }
    while (++index < length) {
        var fromIndex = 0;
        var value = values[index];
        var computed = iteratee ? iteratee(value) : value;
        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
                seen.splice(fromIndex, 1);
            }
            array.splice(fromIndex, 1);
        }
    }
    return array;
}
export default basePullAll;
