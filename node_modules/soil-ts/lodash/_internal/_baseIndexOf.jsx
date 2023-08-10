import baseFindIndex from "./_baseFindIndex";
import baseIsNaN from "./_baseIsNaN";
import strictIndexOf from "./_strictIndexOf";
function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
export default baseIndexOf;
