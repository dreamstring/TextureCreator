import keys from "./#keys";
function someValues(object, predicate) {
    object = Object(object);
    var props = keys(object);
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var key = props_1[_i];
        if (predicate(object[key], key, object)) {
            return true;
        }
    }
    return false;
}
export default someValues;
