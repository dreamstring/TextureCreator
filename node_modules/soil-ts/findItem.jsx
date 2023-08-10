function findItem(collection, iteratee) {
    var index = 0;
    var length = collection.numItems + 1;
    var items = collection.items;
    while (++index < length) {
        var item = items[index];
        if (iteratee(item, index, collection)) {
            return item;
        }
    }
}
export default findItem;
