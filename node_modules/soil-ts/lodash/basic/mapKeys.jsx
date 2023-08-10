function mapKeys(object, iteratee) {
    var result = {};
    for (var key in object) {
        var value = object[key];
        result[iteratee(value, key, object)] = value;
    }
    return result;
}
export default mapKeys;
