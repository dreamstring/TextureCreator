import forEach from "./#forEach";
import has from "./#has";
import keys from "./#keys";
function invertBy(object, iteratee) {
    var result = {};
    forEach(keys(object), function (key) {
        var value = iteratee(object[key]);
        if (has(result, value)) {
            result[value].push(key);
        }
        else {
            result[value] = [key];
        }
    });
    return result;
}
export default invertBy;
