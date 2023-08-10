import collectionEach from "./_internal/_collectionEach";
function collectionToArray(collection) {
    var result = Array(collection.length);
    collectionEach(collection, function (item, index) {
        result[index - 1] = item;
    });
    return result;
}
export default collectionToArray;
