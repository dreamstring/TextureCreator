import { HALF_MAX_ARRAY_LENGTH } from "../basic/_global";
import baseSortedIndexBy from "./_baseSortedIndexBy";
function baseSortedIndex(array, value, retHighest) {
    var low = 0;
    var high = array == null ? low : array.length;
    if (typeof value === "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
            var mid = (low + high) >>> 1;
            var computed = array[mid];
            if (computed !== null && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return high;
    }
    return baseSortedIndexBy(array, value, function (value) { return value; }, retHighest);
}
export default baseSortedIndex;
