function baseToNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    return +value;
}
export default baseToNumber;
