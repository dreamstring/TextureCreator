import has from "./lodash/#has";
import isSourceFileMissing from "./isSourceFileMissing";
function isPlaceholderItem(value) {
    return isSourceFileMissing(value) && !has(value.mainSource, "missingFootagePath");
}
export default isPlaceholderItem;
