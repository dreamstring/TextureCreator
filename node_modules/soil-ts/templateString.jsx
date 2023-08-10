import { nativeSlice } from "./lodash/basic/_global";
import { reTemplateString } from "./_internal/_global";
function templateString(string) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var values = nativeSlice.call(arguments, 1);
    return string.replace(reTemplateString, function (matched, $1) { return values[Number($1)]; });
}
export default templateString;
