import castFolder from "./_castFolder";
function getFiles(path, mask) {
    var folder = castFolder(path);
    if (!folder.exists) {
        return [];
    }
    return folder.getFiles(mask);
}
export default getFiles;
