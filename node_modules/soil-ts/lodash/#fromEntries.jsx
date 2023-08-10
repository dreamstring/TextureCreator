function fromEntries(pairs) {
    var result = {};
    if (pairs == null) {
        return result;
    }
    for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
        var pair = pairs_1[_i];
        result[pair[0]] = pair[1];
    }
    return result;
}
export default fromEntries;
