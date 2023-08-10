import { nativePush } from "../basic/_global";
import isFlattenable from "./_isFlattenable";
function baseFlatten(array, depth, predicate, isStrict, result) {
    predicate || (predicate = isFlattenable);
    result || (result = []);
    if (array == null) {
        return result;
    }
    var index = -1, length = array.length;
    while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
            }
            else {
                nativePush.apply(result, value);
            }
        }
        else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}
export default baseFlatten;
