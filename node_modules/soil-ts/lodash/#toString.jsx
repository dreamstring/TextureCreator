import { INFINITY } from "./basic/_global";
import isArray from "./basic/isArray";
import map from "./#map";
function toString(value) {
    if (value == null) {
        return "";
    }
    if (typeof value === "string") {
        return value;
    }
    if (isArray(value)) {
        return "".concat(map(value, function (other) { return (other == null ? other : toString(other)); }));
    }
    var result = "".concat(value);
    return result == "0" && 1 / Number(value) == -INFINITY ? "-0" : result;
}
export default toString;
