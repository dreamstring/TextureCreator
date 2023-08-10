import isArray from "./isArray";
import isArguments from "../#isArguments";
function isFlattenable(value) {
    return isArray(value) || isArguments(value);
}
export default isFlattenable;
