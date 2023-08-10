function unlockedLayer(layer, callback) {
    if (!layer.locked) {
        return callback(layer);
    }
    var result;
    layer.locked = false;
    result = callback(layer);
    layer.locked = true;
    return result;
}
export default unlockedLayer;
