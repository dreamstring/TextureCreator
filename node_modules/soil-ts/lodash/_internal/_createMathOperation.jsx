import baseToNumber from "./_baseToNumber";
function createMathOperation(operator, defaultValue) {
    return function (value, other) {
        if (value === undefined && other === undefined) {
            return defaultValue;
        }
        if (value !== undefined && other === undefined) {
            return value;
        }
        if (other !== undefined && value === undefined) {
            return other;
        }
        value = baseToNumber(value);
        other = baseToNumber(other);
        return operator(value, other);
    };
}
export default createMathOperation;
