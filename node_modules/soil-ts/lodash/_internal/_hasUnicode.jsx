import { reHasUnicode } from "../basic/_global";
function hasUnicode(string) {
    return reHasUnicode.test(string);
}
export default hasUnicode;
