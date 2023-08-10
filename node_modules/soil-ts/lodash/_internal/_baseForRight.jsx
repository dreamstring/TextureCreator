function baseForRight(object, iteratee, keysFunc) {
    var iterable = Object(object);
    var props = keysFunc(object);
    var length = props.length;
    while (length--) {
        var key = props[length];
        if (iteratee(iterable[key], key, iterable) === false) {
            break;
        }
    }
    return object;
}
export default baseForRight;
