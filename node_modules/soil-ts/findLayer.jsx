function findLayer(comp, iteratee) {
    var index = 0;
    var length = comp.numLayers + 1;
    var layers = comp.layers;
    while (++index < length) {
        var layer = layers[index];
        if (iteratee(layer, index, comp)) {
            return layer;
        }
    }
}
export default findLayer;
