import eq from "../#eq";
function baseSortedUniq(array, iteratee) {
    var seen;
    var index = -1;
    var resIndex = 0;
    var length = array.length;
    var result = [];
    while (++index < length) {
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        if (!index || !eq(computed, seen)) {
            seen = computed;
            result[resIndex++] = (value === 0 ? 0 : value);
        }
    }
    return result;
}
export default baseSortedUniq;
