import { INFINITY } from "../basic/_global";
function toKey(value) {
    if (typeof value === "string") {
        return value;
    }
    var result = "".concat(value);
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
export default toKey;
