import removeFileExt from "./removeFileExt";
function getPlainFileName(file) {
    return removeFileExt(file.displayName);
}
export default getPlainFileName;
