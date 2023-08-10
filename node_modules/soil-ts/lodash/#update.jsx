import baseUpdate from "./_internal/_baseUpdate";
function update(object, path, updater) {
    return object == null ? object : baseUpdate(object, path, updater);
}
export default update;
