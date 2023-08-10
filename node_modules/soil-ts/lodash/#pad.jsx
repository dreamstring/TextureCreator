import createPadding from "./_internal/_createPadding";
import stringSize from "./_internal/_stringSize";
function pad(string, length, chars) {
    var strLength = length ? stringSize(string) : 0;
    if (!length || strLength >= length) {
        return string || "";
    }
    var mid = (length - strLength) / 2;
    return createPadding(Math.floor(mid), chars) + string + createPadding(Math.ceil(mid), chars);
}
export default pad;
