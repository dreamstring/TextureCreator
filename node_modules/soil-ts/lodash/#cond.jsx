import map from "./#map";
function cond(pairs) {
    var length = pairs.length;
    if (length === 0) {
        pairs = [];
    }
    else {
        pairs = map(pairs, function (pair) {
            if (typeof pair[1] !== "function") {
                throw new Error("Expected a function");
            }
            return [pair[0], pair[1]];
        });
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var index = -1, length = pairs.length;
        while (++index < length) {
            var pair = pairs[index];
            if (pair[0].apply(this, arguments)) {
                return pair[1].apply(this, arguments);
            }
        }
    };
}
export default cond;
