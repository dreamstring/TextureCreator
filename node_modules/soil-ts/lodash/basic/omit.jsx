import contains from "./contains";
import has from "../#has";
function omit(obj, keys) {
    var result = {};
    for (var key in obj) {
        if (has(obj, key) && !contains(keys, key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
export default omit;
