function forIn(object, iteratee) {
    for (var key in object) {
        if (iteratee(object[key], key, object) === false) {
            break;
        }
    }
    return object;
}
export default forIn;
