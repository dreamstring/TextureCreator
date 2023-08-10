function basePropertyOf(object) {
    return function (key) {
        return object == null ? undefined : object[key];
    };
}
export default basePropertyOf;
