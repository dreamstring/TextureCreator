import isArray from "./basic/isArray";
import copyArray from "./_internal/_copyArray";
import stringToPath from "./_internal/_stringToPath";
import toKey from "./_internal/_toKey";
import map from "./#map";
function toPath(value) {
    if (isArray(value)) {
        return map(value, toKey);
    }
    return copyArray(stringToPath(value));
}
export default toPath;
