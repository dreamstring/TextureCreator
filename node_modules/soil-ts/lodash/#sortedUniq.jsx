import baseSortedUniq from "./_internal/_baseSortedUniq";
function sortedUniq(array) {
    return array != null && array.length ? baseSortedUniq(array) : [];
}
export default sortedUniq;
