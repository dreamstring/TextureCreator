import map from "./#map";
import unzip from "./#unzip";
function unzipWith(array, iteratee) {
    if (!(array != null && array.length)) {
        return [];
    }
    var result = unzip(array);
    return map(result, function (group) { return iteratee.apply(undefined, group); });
}
export default unzipWith;
