import map from "./#map";
function over(iteratees) {
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var values = arguments;
        return map(iteratees, function (iteratee) { return iteratee.apply(_this, values); });
    };
}
export default over;
