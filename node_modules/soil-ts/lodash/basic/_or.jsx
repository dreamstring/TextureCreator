function or() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var index = -1;
    var length = arguments.length;
    while (++index < length) {
        if (arguments[index]) {
            return true;
        }
    }
    return false;
}
export default or;
