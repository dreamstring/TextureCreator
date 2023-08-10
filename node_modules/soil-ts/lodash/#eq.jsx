import or from "./basic/_or";
function eq(value, other) {
    return or(value === other, value !== value && other !== other);
}
export default eq;
