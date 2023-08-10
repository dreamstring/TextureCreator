import { MAX_ARRAY_LENGTH, MAX_SAFE_INTEGER } from "./basic/_global";
function times(n, iteratee) {
    if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
    }
    var index = -1;
    var length = Math.min(n, MAX_ARRAY_LENGTH);
    var result = new Array(length);
    while (++index < length) {
        result[index] = iteratee(index);
    }
    index = MAX_ARRAY_LENGTH;
    n -= MAX_ARRAY_LENGTH;
    while (++index < n) {
        iteratee(index);
    }
    return result;
}
export default times;
