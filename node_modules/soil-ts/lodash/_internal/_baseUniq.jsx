import arrayIncludes from "./_arrayIncludes";
import arrayIncludesWith from "./_arrayIncludesWith";
import isFunction from "../#isFunction";
function baseUniq(array, iteratee, comparator) {
    var index = -1;
    var includes = arrayIncludes;
    var isCommon = true;
    var result = [];
    var seen = result;
    var hasIteratee = isFunction(iteratee);
    var hasComparator = isFunction(comparator);
    var length = array.length;
    if (hasComparator) {
        isCommon = false;
        includes = arrayIncludesWith;
    }
    else {
        seen = hasIteratee ? [] : result;
    }
    outer: while (++index < length) {
        var value = array[index];
        var computed = hasIteratee ? iteratee(value) : value;
        value = (hasComparator || value !== 0 ? value : 0);
        if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                    continue outer;
                }
            }
            if (hasIteratee) {
                seen.push(computed);
            }
            result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
                seen.push(computed);
            }
            result.push(value);
        }
    }
    return result;
}
export default baseUniq;
