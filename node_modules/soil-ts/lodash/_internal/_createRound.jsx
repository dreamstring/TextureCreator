function createRound(methodName) {
    var func = Math[methodName];
    return function (number, precision) {
        if (precision === void 0) { precision = 0; }
        precision = precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292);
        if (precision) {
            var pair = "".concat(number, "e").split("e");
            var value = func(Number("".concat(pair[0], "e").concat(+pair[1] + precision)));
            pair = "".concat(value, "e").split("e");
            return +"".concat(pair[0], "e").concat(+pair[1] - precision);
        }
        return func(number);
    };
}
export default createRound;
