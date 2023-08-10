import isObject from "../#isObject";
function isStrictComparable(value) {
    return value === value && !isObject(value);
}
export default isStrictComparable;
