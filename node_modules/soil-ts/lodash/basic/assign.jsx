import has from "../#has";
import isObject from "../#isObject";
function assign(object, source) {
    var result = Object(object);
    if (isObject(source)) {
        for (var key in source) {
            if (has(source, key)) {
                result[key] = source[key];
            }
        }
    }
    return result;
}
export default assign;
