import baseSortedIndex from "./_internal/_baseSortedIndex";
function sortedLastIndex(array, value) {
    return baseSortedIndex(array, value, true);
}
export default sortedLastIndex;
