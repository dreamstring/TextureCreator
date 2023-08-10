import findLastIndex from "./#findLastIndex";
function findLast(array, predicate, fromIndex) {
    var index = findLastIndex(array, predicate, fromIndex);
    return index > -1 ? array[index] : undefined;
}
export default findLast;
