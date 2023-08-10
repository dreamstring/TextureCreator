import castPath from "./_castPath";
import parent from "./_parent";
import toKey from "./_toKey";
import last from "../#last";
function baseUnset(object, path) {
    var partial = castPath(path, object);
    object = parent(object, partial);
    return object == null || delete object[toKey(last(partial))];
}
export default baseUnset;
