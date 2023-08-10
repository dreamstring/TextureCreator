import keys from "./#keys";
function forOwnRight(object, iteratee) {
    var props = keys(object);
    var length = props.length;
    while (length--) {
        var key = props[length];
        iteratee(object[key], key, object);
    }
    return object;
}
export default forOwnRight;
