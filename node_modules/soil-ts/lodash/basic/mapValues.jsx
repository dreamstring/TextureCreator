import has from "../#has";
function mapValues(object, iteratee) {
    var result = {};
    for (var key in object) {
        if (has(object, key)) {
            result[key] = iteratee(object[key], key, object);
        }
    }
    return result;
}
export default mapValues;
