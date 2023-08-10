import get from "../#get";
function baseAt(object, paths) {
    var index = -1;
    var length = paths.length;
    var result = new Array(length);
    var skip = object == null;
    while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
    }
    return result;
}
export default baseAt;
