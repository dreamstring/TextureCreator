import compareAscending from "./_compareAscending";
function compareMultiple(object, other, orders) {
    var index = -1;
    var objCriteria = object.criteria;
    var othCriteria = other.criteria;
    var length = objCriteria.length;
    var ordersLength = orders.length;
    while (++index < length) {
        var order = index < ordersLength ? orders[index] : null;
        var cmpFn = order && typeof order === "function" ? order : compareAscending;
        var result = cmpFn(objCriteria[index], othCriteria[index]);
        if (result) {
            if (order && typeof order !== "function") {
                return result * (order == "desc" ? -1 : 1);
            }
            return result;
        }
    }
    return object.index - other.index;
}
export default compareMultiple;
