import collectionEach from "./_internal/_collectionEach";
function filterLayers(compItem, predicate) {
    var result = [];
    collectionEach(compItem.layers, function (layer, index) {
        if (predicate(layer, index, compItem)) {
            result.push(layer);
        }
    });
    return result;
}
export default filterLayers;
