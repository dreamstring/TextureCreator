function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function (value, key, collection) {
        if (predicate(value, key, collection)) {
            result = key;
            return false;
        }
    });
    return result;
}
export default baseFindKey;
