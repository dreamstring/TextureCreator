import isArray from "../basic/isArray";
import isKey from "./_isKey";
import stringToPath from "./_stringToPath";
function castPath(value, object) {
    if (isArray(value)) {
        return value;
    }
    return isKey(value, object) ? [value] : stringToPath(value);
}
export default castPath;
