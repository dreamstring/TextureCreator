import forEach from "./#forEach";
import keys from "./#keys";
function mapValue(object, iteratee) {
    object = Object(object);
    var result = {};
    forEach(keys(object), function (key) {
        result[key] = iteratee(object[key], key, object);
    });
    return result;
}
export default mapValue;
