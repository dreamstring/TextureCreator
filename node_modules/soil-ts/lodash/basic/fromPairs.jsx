function fromPairs(pairs) {
    var index = -1;
    var length = pairs == null ? 0 : pairs.length;
    var result = {};
    while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
    }
    return result;
}
export default fromPairs;
