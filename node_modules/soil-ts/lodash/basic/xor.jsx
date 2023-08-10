import baseFlatten from "./_baseFlatten";
import difference from "./difference";
import uniq from "../#uniq";
function xor() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var values = arguments;
    var length = values.length;
    if (length < 2) {
        return length ? uniq(values[0]) : [];
    }
    var index = -1;
    var result = Array(length);
    while (++index < length) {
        var othIndex = -1;
        var array = values[index];
        while (++othIndex < length) {
            if (othIndex != index) {
                result[index] = difference(result[index] || array, values[othIndex]);
            }
        }
    }
    return uniq(baseFlatten(result, 1));
}
export default xor;
