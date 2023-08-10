import baseAssignValue from "./_internal/_baseAssignValue";
import reduce from "./#reduce";
function keyBy(collection, iteratee) {
    return reduce(collection, function (result, value, key) { return (baseAssignValue(result, iteratee(value), value), result); }, {});
}
export default keyBy;
