function negate(predicate) {
    if (typeof predicate !== "function") {
        throw new Error("Expected a function");
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !predicate.apply(this, arguments);
    };
}
export default negate;
