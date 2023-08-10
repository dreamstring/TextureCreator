import isError from "./#isError";
function attempt(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        return func.apply(null, arguments);
    }
    catch (e) {
        return isError(e) ? e : new Error(String(e));
    }
}
export default attempt;
