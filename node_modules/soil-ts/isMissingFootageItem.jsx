import has from "./lodash/#has";
import isSourceFileMissing from "./isSourceFileMissing";
function isMissingFootageItem(value) {
    return isSourceFileMissing(value) && has(value.mainSource, "missingFootagePath");
}
export default isMissingFootageItem;
