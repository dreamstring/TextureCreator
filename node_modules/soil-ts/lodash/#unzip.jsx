import baseProperty from "./_internal/_baseProperty";
import filter from "./#filter";
import map from "./#map";
import isArrayLikeObject from "./#isArrayLikeObject";
function unzip(array) {
    if (!(array != null && array.length)) {
        return [];
    }
    var length = 0;
    array = filter(array, function (group) {
        if (isArrayLikeObject(group)) {
            length = Math.max(group.length, length);
            return true;
        }
        return false;
    });
    var index = -1;
    var result = new Array(length);
    while (++index < length) {
        result[index] = map(array, baseProperty(index));
    }
    return result;
}
export default unzip;
