import { nativeParseFloat } from "./basic/_global";
import toFinite from "./#toFinite";
function random(lower, upper, floating) {
    if (floating === undefined) {
        if (typeof upper === "boolean") {
            floating = upper;
            upper = undefined;
        }
        else if (typeof lower === "boolean") {
            floating = lower;
            lower = undefined;
        }
    }
    if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
    }
    else {
        lower = toFinite(lower);
        if (upper === undefined) {
            upper = lower;
            lower = 0;
        }
        else {
            upper = toFinite(upper);
        }
    }
    if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
    }
    if (floating || lower % 1 || upper % 1) {
        var rand = Math.random();
        var randLength = "".concat(rand).length - 1;
        return Math.min(lower + rand * (upper - lower + nativeParseFloat("1e-".concat(randLength))), upper);
    }
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}
export default random;
