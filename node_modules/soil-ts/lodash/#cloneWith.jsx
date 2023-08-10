import baseClone from "./_internal/_baseClone";
function cloneWith(value, customizer) {
    customizer = typeof customizer === "function" ? customizer : undefined;
    return baseClone(value, false, customizer);
}
export default cloneWith;
