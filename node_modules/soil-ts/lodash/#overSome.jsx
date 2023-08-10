import some from "./#some";
function overSome(iteratees) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var values = arguments;
        return some(iteratees, function (iteratee) {
            return iteratee.apply(this, values);
        });
    };
}
export default overSome;
