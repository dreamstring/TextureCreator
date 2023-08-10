import { NAN, nativeParseInt, reIsBadHex, reIsBinary, reIsOctal, reTrim } from "./basic/_global";
import isObject from "./#isObject";
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf === "function" ? value.valueOf() : value;
        value = isObject(other) ? "".concat(other) : other;
    }
    if (typeof value !== "string") {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? nativeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
export default toNumber;
