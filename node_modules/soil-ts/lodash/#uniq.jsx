import baseUniq from "./_internal/_baseUniq";
function uniq(array) {
    return array != null && array.length ? baseUniq(array) : [];
}
export default uniq;
