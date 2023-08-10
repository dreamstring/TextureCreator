import slice from "../#slice";
function baseWhile(array, predicate, isDrop, fromRight) {
    var length = array.length;
    var index = fromRight ? length : -1;
    while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) { }
    return isDrop ? slice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : slice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}
export default baseWhile;
