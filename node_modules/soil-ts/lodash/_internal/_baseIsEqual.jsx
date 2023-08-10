import baseIsEqualDeep from "./_baseIsEqualDeep";
import isObjectLike from "../#isObjectLike";
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
    if (value === other) {
        return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}
export default baseIsEqual;
