import slice from "./#slice";
function take(array, n) {
    if (n === void 0) { n = 1; }
    return array.length > 0 ? slice(array, 0, n < 0 ? 0 : n) : [];
}
export default take;
