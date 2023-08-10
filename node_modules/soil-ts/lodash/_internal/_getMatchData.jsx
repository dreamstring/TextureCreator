import isStrictComparable from "./_isStrictComparable";
import keys from "../#keys";
function getMatchData(object) {
    var result = keys(object);
    var length = result.length;
    while (length--) {
        var key = result[length];
        var value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}
export default getMatchData;
