import isIterateeCall from "./_isIterateeCall";
function createAssigner(assigner) {
    return function (object) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        var index = -1;
        var length = sources.length;
        var customizer = length > 1 ? sources[length - 1] : undefined;
        var guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer === "function" ? (length--, customizer) : undefined;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while (++index < length) {
            var source = sources[index];
            if (source) {
                assigner(object, source, index, customizer);
            }
        }
        return object;
    };
}
export default createAssigner;
