import collectionEachRight from "./_internal/_collectionEachRight";
function eachLayersRight(compItem, iteratee) {
    collectionEachRight(compItem.layers, function (value, index) {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}
export default eachLayersRight;
