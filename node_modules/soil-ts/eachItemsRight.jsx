import collectionEachRight from "./_internal/_collectionEachRight";
function eachItemsRight(itemCollection, iteratee) {
    collectionEachRight(itemCollection.items, function (value, index) {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
}
export default eachItemsRight;
