import { NAN } from "./basic/_global";
import baseSum from "./_internal/_baseSum.jsx";
function meanBy(array, iteratee) {
    var length = array.length;
    if (length === 0) {
        return NAN;
    }
    return baseSum(array, iteratee) / length;
}
export default meanBy;
