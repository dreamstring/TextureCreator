import before from "./#before";
function once(func) {
    return before(2, func);
}
export default once;
