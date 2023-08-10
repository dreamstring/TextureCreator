import { reUnicode } from "../basic/_global";
function unicodeSize(string) {
    var result = (reUnicode.lastIndex = 0);
    while (reUnicode.test(string)) {
        ++result;
    }
    return result;
}
export default unicodeSize;
