function baseConformsTo(object, source, props) {
    var length = props.length;
    if (object == null) {
        return !length;
    }
    object = Object(object);
    while (length--) {
        var key = props[length];
        var predicate = source[key];
        var value = object[key];
        if ((value === undefined && !(key in object)) || !predicate(value)) {
            return false;
        }
    }
    return true;
}
export default baseConformsTo;
