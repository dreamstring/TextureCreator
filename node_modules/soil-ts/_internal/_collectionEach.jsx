function collectionEach(collection, iteratee) {
    var index = 0;
    var length = collection.length + 1;
    while (++index < length) {
        if (iteratee(collection[index], index, collection) === false) {
            break;
        }
    }
    return collection;
}
export default collectionEach;
