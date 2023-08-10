var idCounter = {};
function uniqueId(prefix) {
    if (prefix === void 0) { prefix = "$lodash$"; }
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }
    var id = ++idCounter[prefix];
    if (prefix === "$lodash$") {
        return "".concat(id);
    }
    return "".concat(prefix).concat(id);
}
export default uniqueId;
