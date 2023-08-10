function constant(value) {
    return function () {
        return value;
    };
}
export default constant;
