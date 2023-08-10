import baseWhile from "./_internal/_baseWhile";
function dropWhile(array, predicate) {
    return array != null && array.length ? baseWhile(array, predicate, true) : [];
}
export default dropWhile;
