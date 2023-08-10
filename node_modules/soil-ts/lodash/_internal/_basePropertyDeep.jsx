import baseGet from "./_baseGet";
function basePropertyDeep(path) {
    return function (object) { return baseGet(object, path); };
}
export default basePropertyDeep;
