import { MAX_ARRAY_INDEX } from "../basic/_global";
function baseSortedIndexBy(array, value, iteratee, retHighest) {
    var low = 0;
    var high = array == null ? 0 : array.length;
    if (high == 0) {
        return 0;
    }
    value = iteratee(value);
    var valIsNaN = value !== value;
    var valIsNull = value === null;
    var valIsUndefined = value === undefined;
    while (low < high) {
        var setLow = void 0;
        var mid = Math.floor((low + high) / 2);
        var computed = iteratee(array[mid]);
        var othIsDefined = computed !== undefined;
        var othIsNull = computed === null;
        var othIsReflexive = computed === computed;
        if (valIsNaN) {
            setLow = retHighest || othIsReflexive;
        }
        else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
        }
        else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        }
        else if (othIsNull) {
            setLow = false;
        }
        else {
            setLow = retHighest ? computed <= value : computed < value;
        }
        if (setLow) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return Math.min(high, MAX_ARRAY_INDEX);
}
export default baseSortedIndexBy;
