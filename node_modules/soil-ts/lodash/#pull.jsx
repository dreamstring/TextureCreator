import { nativeSlice } from "./basic/_global";
import pullAll from "./#pullAll";
function pull(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var values = nativeSlice.call(arguments, 1);
    return pullAll(array, values);
}
export default pull;
