import createPadding from "./_internal/_createPadding";
import stringSize from "./_internal/_stringSize";
function padStart(string, length, chars) {
    var strLength = length ? stringSize(string) : 0;
    return length && strLength < length ? createPadding(length - strLength, chars) + string : string || "";
}
export default padStart;
