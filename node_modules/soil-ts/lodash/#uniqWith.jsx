import baseUniq from "./_internal/_baseUniq";
function uniqWith(array, comparator) {
    comparator = typeof comparator === "function" ? comparator : undefined;
    return array != null && array.length ? baseUniq(array, undefined, comparator) : [];
}
export default uniqWith;
