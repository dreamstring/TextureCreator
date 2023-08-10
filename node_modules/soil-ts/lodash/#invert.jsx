import { nativeToString } from "./basic/_global";
import forEach from "./#forEach";
import keys from "./#keys";
function invert(object) {
    var result = {};
    forEach(keys(object), function (key) {
        var value = object[key];
        if (value != null && typeof value.toString !== "function") {
            value = nativeToString.call(value);
        }
        result[value] = key;
    });
    return result;
}
export default invert;
