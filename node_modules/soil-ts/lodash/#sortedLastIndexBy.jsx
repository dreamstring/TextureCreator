import baseSortedIndexBy from "./_internal/_baseSortedIndexBy";
function sortedLastIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, iteratee, true);
}
export default sortedLastIndexBy;
