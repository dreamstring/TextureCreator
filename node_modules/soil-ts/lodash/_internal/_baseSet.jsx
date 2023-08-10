import assignValue from "./_assignValue";
import castPath from "./_castPath";
import isIndex from "./_isIndex";
import toKey from "./_toKey";
import isObject from "../#isObject";
function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
        return object;
    }
    var partial = castPath(path, object);
    var length = partial.length;
    var lastIndex = length - 1;
    var index = -1;
    var nested = object;
    while (nested != null && ++index < length) {
        var key = toKey(partial[index]);
        var newValue = value;
        if (index != lastIndex) {
            var value_1 = nested[key];
            newValue = customizer ? customizer(value_1, key, nested) : undefined;
            if (newValue === undefined) {
                if (isObject(value_1)) {
                    newValue = value_1;
                }
                else {
                    newValue = isIndex(partial[index + 1]) ? [] : {};
                }
            }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
export default baseSet;
