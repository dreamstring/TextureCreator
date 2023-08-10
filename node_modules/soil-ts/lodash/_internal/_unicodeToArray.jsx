import { reUnicode } from "../basic/_global";
function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
export default unicodeToArray;
