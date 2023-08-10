import baseFlatten from "./_internal/_baseFlatten";
import baseUniq from "./_internal/_baseUniq";
import isArrayLikeObject from "./#isArrayLikeObject";
function union() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var values = arguments;
    return baseUniq(baseFlatten(values, 1, isArrayLikeObject, true));
}
export default union;
