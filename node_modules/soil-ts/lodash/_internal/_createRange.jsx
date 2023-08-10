import baseRange from "./_baseRange";
import toFinite from "../#toFinite";
function createRange(fromRight) {
    return function (start, end, step) {
        start = toFinite(start);
        if (end === undefined) {
            end = start;
            start = 0;
        }
        else {
            end = toFinite(end);
        }
        if (step === undefined) {
            step = start < end ? 1 : -1;
        }
        else {
            step = toFinite(step);
        }
        return baseRange(start, end, step, fromRight);
    };
}
export default createRange;
