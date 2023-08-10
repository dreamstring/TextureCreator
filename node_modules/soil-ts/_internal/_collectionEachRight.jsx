function collectionEachRight(collection, iteratee) {
    var index = collection.length + 1;
    while (--index) {
        if (iteratee(collection[index], index, collection) === false) {
            break;
        }
    }
    return collection;
}
export default collectionEachRight;
