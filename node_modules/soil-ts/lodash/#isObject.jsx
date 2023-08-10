function isObject(value) {
    if (value == null) {
        return false;
    }
    var type = typeof value;
    return type === "object" || type === "function";
}
export default isObject;
