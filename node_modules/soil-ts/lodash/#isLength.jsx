import { MAX_SAFE_INTEGER } from "./basic/_global";
function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
export default isLength;
