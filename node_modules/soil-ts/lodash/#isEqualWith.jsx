import baseIsEqual from "./_internal/_baseIsEqual";
function isEqualWith(value, other, customizer) {
    customizer = typeof customizer === "function" ? customizer : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
}
export default isEqualWith;
