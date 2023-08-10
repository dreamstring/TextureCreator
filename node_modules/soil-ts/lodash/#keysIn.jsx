function keysIn(object) {
    var result = [];
    for (var key in object) {
        result.push(key);
    }
    return result;
}
export default keysIn;
