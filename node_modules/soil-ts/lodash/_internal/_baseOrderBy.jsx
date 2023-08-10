import identity from "../basic/identity";
import isArray from "../basic/isArray";
import baseEach from "./_baseEach";
import baseGet from "./_baseGet";
import baseSortBy from "./_baseSortBy";
import compareMultiple from "./_compareMultiple";
import isArrayLike from "../#isArrayLike";
import map from "../#map";
function baseOrderBy(array, iteratees, orders) {
    if (iteratees.length) {
        iteratees = map(iteratees, function (iteratee) {
            if (isArray(iteratee)) {
                return function (value) { return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee); };
            }
            return iteratee;
        });
    }
    else {
        iteratees = [identity];
    }
    var criteriaIndex = -1;
    var eachIndex = -1;
    var result = isArrayLike(array) ? new Array(array.length) : [];
    baseEach(array, function (value) {
        var criteria = map(iteratees, function (iteratee) { return iteratee(value); });
        result[++eachIndex] = {
            criteria: criteria,
            index: ++criteriaIndex,
            value: value
        };
    });
    return baseSortBy(result, function (object, other) { return compareMultiple(object, other, orders); });
}
export default baseOrderBy;
