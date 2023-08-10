import isNumber from "../#isNumber";
function isNaN(value) {
    return isNumber(value) && value != +value;
}
export default isNaN;
