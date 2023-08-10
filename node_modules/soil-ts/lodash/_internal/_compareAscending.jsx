function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined;
        var valIsNull = value === null;
        var valIsReflexive = value === value;
        var othIsDefined = other !== undefined;
        var othIsNull = other === null;
        var othIsReflexive = other === other;
        var val = typeof value === "string" ? value.localeCompare(other) : -other;
        if ((!othIsNull && val > 0) || (valIsNull && othIsDefined && othIsReflexive) || (!valIsDefined && othIsReflexive) || !valIsReflexive) {
            return 1;
        }
        if ((!valIsNull && val < 0) || (othIsNull && valIsDefined && valIsReflexive) || (!othIsDefined && valIsReflexive) || !othIsReflexive) {
            return -1;
        }
    }
    return 0;
}
export default compareAscending;
