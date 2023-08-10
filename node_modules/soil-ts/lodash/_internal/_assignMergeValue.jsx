import baseAssignValue from "./_baseAssignValue";
import eq from "../#eq";
function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) || (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
    }
}
export default assignMergeValue;
