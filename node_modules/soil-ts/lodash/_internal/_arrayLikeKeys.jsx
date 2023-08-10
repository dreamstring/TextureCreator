import isArray from "../basic/isArray";
import isIndex from "./_isIndex";
import has from "../#has";
import isArguments from "../#isArguments";
function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value);
    var isArg = !isArr && isArguments(value);
    var skipIndexes = isArr || isArg;
    var length = value.length;
    var result = new Array(skipIndexes ? length : 0);
    var index = skipIndexes ? -1 : length;
    while (++index < length) {
        result[index] = "".concat(index);
    }
    for (var key in value) {
        if ((inherited || has(value, key)) && !(skipIndexes && (key === "length" || isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
export default arrayLikeKeys;
