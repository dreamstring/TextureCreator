function toPlainObject(value) {
    value = Object(value);
    var result = {};
    for (var key in value) {
        result[key] = value[key];
    }
    return result;
}
export default toPlainObject;
