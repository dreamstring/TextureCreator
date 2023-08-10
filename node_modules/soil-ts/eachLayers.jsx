import collectionEach from "./_internal/_collectionEach";
function eachLayers(compItem, iteratee) {
    collectionEach(compItem.layers, function (value, index) {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}
export default eachLayers;
