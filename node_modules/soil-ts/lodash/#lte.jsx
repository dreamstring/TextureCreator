function lte(value, other) {
    if (!(typeof value === "string" && typeof other === "string")) {
        value = +value;
        other = +other;
    }
    return value <= other;
}
export default lte;
