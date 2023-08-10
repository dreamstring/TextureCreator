import baseAssignValue from "./_internal/_baseAssignValue";
import has from "./#has";
import reduce from "./#reduce";
function groupBy(array, iteratee) {
    return reduce(array, function (result, value) {
        var key = iteratee(value).toString();
        if (has(result, key)) {
            result[key].push(value);
        }
        else {
            baseAssignValue(result, key, [value]);
        }
        return result;
    }, {});
}
export default groupBy;
