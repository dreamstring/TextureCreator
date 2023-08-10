import { MAX_SAFE_INTEGER, reIsUint } from "../basic/_global";
import or from "../basic/_or";
function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && or(type === "number", reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
export default isIndex;
