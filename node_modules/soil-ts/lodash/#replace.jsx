function replace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var string = "".concat(args[0]);
    return args.length < 3 ? string : string.replace(args[1], args[2]);
}
export default replace;
