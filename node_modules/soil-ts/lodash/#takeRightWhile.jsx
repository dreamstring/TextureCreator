import baseWhile from "./_internal/_baseWhile";
function takeRightWhile(array, predicate) {
    return array.length > 0 ? baseWhile(array, predicate, false, true) : [];
}
export default takeRightWhile;
