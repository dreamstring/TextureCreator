import baseClone from "./_internal/_baseClone";
function cloneDeepWith(value, customizer) {
    customizer = typeof customizer === "function" ? customizer : undefined;
    return baseClone(value, true, customizer);
}
export default cloneDeepWith;
