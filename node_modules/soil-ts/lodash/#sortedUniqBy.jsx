import baseSortedUniq from "./_internal/_baseSortedUniq";
function sortedUniqBy(array, iteratee) {
    return array != null && array.length ? baseSortedUniq(array, iteratee) : [];
}
export default sortedUniqBy;
