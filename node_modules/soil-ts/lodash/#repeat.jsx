import { MAX_SAFE_INTEGER, nativeFloor } from "./basic/_global";
function repeat(string, n) {
    var result = "";
    if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
    }
    do {
        if (n % 2) {
            result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
            string += string;
        }
    } while (n);
    return result;
}
export default repeat;
