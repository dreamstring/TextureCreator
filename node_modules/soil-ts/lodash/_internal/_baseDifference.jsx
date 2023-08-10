import arrayIncludes from "./_arrayIncludes";
import arrayIncludesWith from "./_arrayIncludesWith";
import map from "../#map";
function baseDifference(array, values, iteratee, comparator) {
    var index = -1;
    var includes = arrayIncludes;
    var isCommon = true;
    var result = [];
    var length = array.length;
    var valuesLength = values.length;
    if (!array.length) {
        return result;
    }
    if (iteratee) {
        values = map(values, function (value) { return iteratee(value); });
    }
    if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
    }
    outer: while (++index < length) {
        var value = array[index];
        var computed = iteratee == null ? value : iteratee(value);
        value = (comparator || value !== 0 ? value : 0);
        if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                    continue outer;
                }
            }
            result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
            result.push(value);
        }
    }
    return result;
}
export default baseDifference;
