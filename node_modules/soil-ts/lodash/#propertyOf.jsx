import baseGet from "./_internal/_baseGet";
function propertyOf(object) {
    return function (path) { return (object == null ? undefined : baseGet(object, path)); };
}
export default propertyOf;
