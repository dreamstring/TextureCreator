import baseGet from "./_baseGet";
import baseSet from "./_baseSet";
import castPath from "./_castPath";
function basePickBy(object, paths, predicate) {
    var index = -1;
    var length = paths.length;
    var result = {};
    while (++index < length) {
        var path = paths[index];
        var value = baseGet(object, path);
        if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
        }
    }
    return result;
}
export default basePickBy;
