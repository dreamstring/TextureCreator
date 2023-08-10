import castFolder from "./_internal/_castFolder";
function deleteFolder(path) {
    var folder = castFolder(path);
    if (!folder.exists) {
        return true;
    }
    return folder.remove();
}
export default deleteFolder;
