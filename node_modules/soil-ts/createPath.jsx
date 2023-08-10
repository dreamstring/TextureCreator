import { nativeJoin } from "./lodash/basic/_global";
function createPath() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return nativeJoin.call(arguments, "/");
}
export default createPath;
