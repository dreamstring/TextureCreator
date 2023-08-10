import has from "./#has";
function forOwn(object, iteratee) {
    for (var key in object) {
        if (has(object, key)) {
            if (iteratee(object[key], key, object) === false) {
                break;
            }
        }
    }
    return object;
}
export default forOwn;
