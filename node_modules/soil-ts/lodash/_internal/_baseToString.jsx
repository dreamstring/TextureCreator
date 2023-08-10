import { INFINITY } from "../basic/_global";
import isArray from "../basic/isArray";
import map from "../#map";
function baseToString(value) {
    if (typeof value === "string") {
        return value;
    }
    if (isArray(value)) {
        return "".concat(map(value, baseToString));
    }
    var result = "".concat(value);
    return result === "0" && 1 / value === -INFINITY ? "-0" : result;
}
export default baseToString;
