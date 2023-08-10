import baseGet from "./_internal/_baseGet";
function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
export default get;
