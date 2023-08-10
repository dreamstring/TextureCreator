import castFile from "./_internal/_castFile";
function deleteFile(path) {
    var file = castFile(path);
    if (!file.exists) {
        return true;
    }
    return file.remove();
}
export default deleteFile;
