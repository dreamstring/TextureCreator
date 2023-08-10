import nth from "./#nth";
function nthArg(n) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return nth(args, n);
    };
}
export default nthArg;
