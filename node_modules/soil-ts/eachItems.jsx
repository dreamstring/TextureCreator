import collectionEach from "./_internal/_collectionEach";
function eachItems(itemCollection, iteratee) {
    collectionEach(itemCollection.items, function (value, index) {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
}
export default eachItems;
