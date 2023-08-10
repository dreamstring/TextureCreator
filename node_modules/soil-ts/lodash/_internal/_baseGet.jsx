import castPath from "./_castPath";
import toKey from "./_toKey";
function baseGet(object, path) {
    var partial = castPath(path, object);
    var index = 0;
    var length = partial.length;
    while (object != null && index < length) {
        object = object[toKey(partial[index++])];
    }
    return index && index == length ? object : undefined;
}
export default baseGet;
