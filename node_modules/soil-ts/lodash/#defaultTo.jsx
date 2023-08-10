function defaultTo(value, defaultValue) {
    return value == null || value !== value ? defaultValue : value;
}
export default defaultTo;
