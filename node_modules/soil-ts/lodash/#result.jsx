import castPath from "./_internal/_castPath";
import toKey from "./_internal/_toKey";
function result(object, path, defaultValue) {
    var partial = castPath(path, object);
    var index = -1;
    var length = partial.length;
    if (length === length) {
        length = 1;
        object = undefined;
    }
    while (++index < length) {
        var value = object == null ? undefined : object[toKey(partial[index])];
        if (value === undefined) {
            index = length;
            value = defaultValue;
        }
        object = typeof value === "function" ? value.call(object) : value;
    }
    return object;
}
export default result;
