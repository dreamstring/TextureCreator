function baseFor(object, iteratee, keysFunc) {
    var iterable = Object(object);
    var props = keysFunc(object);
    var length = props.length;
    var index = -1;
    while (length--) {
        var key = props[++index];
        if (iteratee(iterable[key], key, iterable) === false) {
            break;
        }
    }
    return object;
}
export default baseFor;
