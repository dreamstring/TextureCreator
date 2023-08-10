import forEach from "./#forEach";
import keys from "./#keys";
function filterObject(object, predicate) {
    object = Object(object);
    var result = [];
    forEach(keys(object), function (key) {
        var value = object[key];
        if (predicate(value, key, object)) {
            result.push(value);
        }
    });
    return result;
}
export default filterObject;
