function findKeyframeIndex(property, predicate) {
    var keyIndex = 0;
    var length = property.numKeys + 1;
    while (++keyIndex < length) {
        if (predicate(property, keyIndex)) {
            return keyIndex;
        }
    }
    return -1;
}
export default findKeyframeIndex;
