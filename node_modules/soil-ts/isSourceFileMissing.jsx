import isFootageItem from "./isFootageItem";
function isSourceFileMissing(value) {
    return isFootageItem(value) && value.footageMissing;
}
export default isSourceFileMissing;
