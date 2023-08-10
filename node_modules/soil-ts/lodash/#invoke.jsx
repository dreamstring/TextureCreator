import castPath from "./_internal/_castPath";
import parent from "./_internal/_parent";
import toKey from "./_internal/_toKey";
import last from "./#last";
function invoke(object, path, args) {
    var partial = castPath(path, object);
    object = parent(object, partial);
    var func = object == null ? object : object[toKey(last(partial))];
    return func == null ? undefined : func.apply(object, args);
}
export default invoke;
