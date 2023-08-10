import baseUnset from "./_internal/_baseUnset";
function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
}
export default unset;
