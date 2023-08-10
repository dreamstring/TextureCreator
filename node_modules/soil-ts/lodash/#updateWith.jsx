import baseUpdate from "./_internal/_baseUpdate";
function updateWith(object, path, updater, customizer) {
    customizer = typeof customizer === "function" ? customizer : undefined;
    return object == null ? object : baseUpdate(object, path, updater, customizer);
}
export default updateWith;
