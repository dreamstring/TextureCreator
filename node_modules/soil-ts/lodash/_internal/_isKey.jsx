import { reIsDeepProp, reIsPlainProp } from "../basic/_global";
import isArray from "../basic/isArray";
import or from "../basic/_or";
function isKey(value, object) {
    if (isArray(value)) {
        return false;
    }
    var type = typeof value;
    if (type === "number" || type === "boolean" || value == null) {
        return true;
    }
    return or(reIsPlainProp.test(value), !reIsDeepProp.test(value), object != null && value in Object(object));
}
export default isKey;
