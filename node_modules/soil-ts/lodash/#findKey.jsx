import has from "./#has";
function findKey(object, predicate) {
    var result;
    if (object == null) {
        return result;
    }
    for (var key in object) {
        if (has(object, key)) {
            if (predicate(object[key], key, object)) {
                return key;
            }
        }
    }
    return result;
}
export default findKey;
