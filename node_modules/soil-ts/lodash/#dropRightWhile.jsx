import baseWhile from "./_internal/_baseWhile";
function dropRightWhile(array, predicate) {
    return array != null && array.length ? baseWhile(array, predicate, true, true) : [];
}
export default dropRightWhile;
