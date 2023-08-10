import filter from "./#filter";
function reject(array, predicate) {
    return filter(array, function (value, index, array) {
        return !predicate(value, index, array);
    });
}
export default reject;
