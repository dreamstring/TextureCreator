import { nativeParseInt, reTrimStart } from "./basic/_global";
function parseInt(string, radix) {
    if (radix == null) {
        radix = 0;
    }
    else if (radix) {
        radix = +radix;
    }
    return nativeParseInt("".concat(string).replace(reTrimStart, ""), radix || 0);
}
export default parseInt;
