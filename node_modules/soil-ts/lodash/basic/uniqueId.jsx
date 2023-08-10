var idCounter = 0;
function uniqueId(prefix) {
    var id = ++idCounter;
    return prefix + id;
}
export default uniqueId;
