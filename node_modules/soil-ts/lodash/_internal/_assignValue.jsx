import baseAssignValue from "./_baseAssignValue";
import eq from "../#eq";
import has from "../#has";
function assignValue(object, key, value) {
    var objectValue = object[key];
    if (!(has(object, key) && eq(objectValue, value))) {
        if (value !== 0 || 1 / value === 1 / objectValue) {
            baseAssignValue(object, key, value);
        }
    }
    else if (value === undefined && !(key in object)) {
        baseAssignValue(object, key, value);
    }
}
export default assignValue;
