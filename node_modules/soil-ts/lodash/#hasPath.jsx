import isArray from "./basic/isArray";
import castPath from "./_internal/_castPath";
import isIndex from "./_internal/_isIndex";
import toKey from "./_internal/_toKey";
import has from "./#has";
import isArguments from "./#isArguments";
import isLength from "./#isLength";
function hasPath(object, path) {
    path = castPath(path, object);
    var index = -1;
    var length = path.length;
    var result = false;
    var key;
    while (++index < length) {
        key = toKey(path[index]);
        if (!(result = object != null && has(object, key))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
export default hasPath;
