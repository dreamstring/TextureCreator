import forEach from "./#forEach";
import invoke from "./#invoke";
function invokeMap(array, path, args) {
    var index = -1;
    var isFunc = typeof path === "function";
    var result = new Array(array.length);
    forEach(array, function (value) {
        result[++index] = isFunc ? path.apply(value, args) : invoke(value, path, args);
    });
    return result;
}
export default invokeMap;
