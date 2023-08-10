import baseFlatten from "./_internal/_baseFlatten";
import baseUniq from "./_internal/_baseUniq";
import isArrayLikeObject from "./#isArrayLikeObject";
import last from "./#last";
function unionBy() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee);
}
export default unionBy;
