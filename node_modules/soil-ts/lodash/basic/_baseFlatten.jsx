import arrayPush from "./_arrayPush";
import isFlattenable from "./isFlattenable";
function baseFlatten(array, depth, result) {
    if (result === void 0) { result = []; }
    var index = -1;
    var length = array.length;
    while (++index < length) {
        var value = array[index];
        if (depth > 0 && isFlattenable(value)) {
            depth > 1 ? baseFlatten(value, depth - 1, result) : arrayPush(result, value);
        }
        else {
            result[result.length] = value;
        }
    }
    return result;
}
export default baseFlatten;
