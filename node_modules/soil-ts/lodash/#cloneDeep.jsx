import baseClone from "./_internal/_baseClone";
function cloneDeep(value) {
    return baseClone(value, true);
}
export default cloneDeep;
