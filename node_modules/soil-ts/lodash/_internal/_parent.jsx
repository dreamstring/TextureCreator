import baseGet from "./_baseGet";
import castPath from "./_castPath";
import slice from "../#slice";
function parent(object, path) {
    var partial = castPath(path, object);
    return partial.length < 2 ? object : baseGet(object, slice(partial, 0, -1));
}
export default parent;
