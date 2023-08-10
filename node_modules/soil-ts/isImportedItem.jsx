import isFile from "./isFile";
import isFootageItem from "./isFootageItem";
function isImportedItem(value) {
    return isFootageItem(value) && isFile(value.file);
}
export default isImportedItem;
