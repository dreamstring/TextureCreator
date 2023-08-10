import { reFlags } from "../basic/_global";
function cloneRegExp(regexp) {
    var matched = reFlags.exec(regexp.toString());
    var flags = matched === null ? undefined : matched.toString();
    var RegExpCtor = regexp.constructor;
    var result = new RegExpCtor(regexp.source, flags);
    result.lastIndex = regexp.lastIndex;
    return result;
}
export default cloneRegExp;
