import has from "./#has";
function everyValue(object, predicate) {
    object = Object(object);
    for (var key in object) {
        if (has(object, key)) {
            if (!predicate(object[key], key, object)) {
                return false;
            }
        }
    }
    return true;
}
export default everyValue;
