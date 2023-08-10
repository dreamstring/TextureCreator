import baseSum from "./_internal/_baseSum";
function sumBy(array, iteratee) {
    return array != null && array.length ? baseSum(array, iteratee) : 0;
}
export default sumBy;
