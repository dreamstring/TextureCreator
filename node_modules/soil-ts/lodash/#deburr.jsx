import { reComboMark, reLatin } from "./basic/_global";
import deburrLetter from "./_internal/_deburrLetter";
function deburr(string) {
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
export default deburr;
