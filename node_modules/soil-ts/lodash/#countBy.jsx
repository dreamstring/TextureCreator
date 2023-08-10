import baseAssignValue from "./_internal/_baseAssignValue";
import has from "./#has";
import reduce from "./#reduce";
function countBy(collection, iteratee) {
    var result = {};
    return reduce(collection, function (result, value) {
        var key = iteratee(value);
        if (has(result, key)) {
            ++result[key];
        }
        else {
            baseAssignValue(result, key, 1);
        }
        return result;
    }, result);
}
export default countBy;
