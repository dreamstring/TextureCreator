import { reHasRegExpChar, reRegExpChar } from "./basic/_global";
function escapeRegExp(string) {
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string || "";
}
export default escapeRegExp;
