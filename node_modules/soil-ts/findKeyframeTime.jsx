function findKeyframeTime(property, predicate) {
    var keyIndex = 0;
    var length = property.numKeys + 1;
    while (++keyIndex < length) {
        if (predicate(property, keyIndex)) {
            return property.keyTime(keyIndex);
        }
    }
    return null;
}
export default findKeyframeTime;
