import createPadding from "./_internal/_createPadding";
import stringSize from "./_internal/_stringSize";
function padEnd(string, length, chars) {
    var strLength = length ? stringSize(string) : 0;
    return length && strLength < length ? string + createPadding(length - strLength, chars) : string || "";
}
export default padEnd;
