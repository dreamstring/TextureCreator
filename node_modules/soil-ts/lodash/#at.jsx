import baseAt from "./_internal/_baseAt";
import baseFlatten from "./_internal/_baseFlatten";
var at = function (object, paths) {
    return baseAt(object, baseFlatten(paths, 1));
};
export default at;
