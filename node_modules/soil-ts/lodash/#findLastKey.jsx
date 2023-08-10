import keys from "./#keys";
function findLastKey(object, predicate) {
    var iterable = Object(object);
    var props = keys(object);
    var length = props.length;
    while (length--) {
        var key = props[length];
        if (predicate(iterable[key], key, iterable)) {
            return key;
        }
    }
}
export default findLastKey;
