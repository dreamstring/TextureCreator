import forEach from "./#forEach";
import keys from "./#keys";
function mapObject(object, iteratee) {
    object = Object(object);
    var props = keys(object);
    var result = new Array(props.length);
    forEach(props, function (key, index) {
        result[index] = iteratee(object[key], key, object);
    });
    return result;
}
export default mapObject;
