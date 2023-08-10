import castFile from "./_internal/_castFile";
import castFolder from "./_internal/_castFolder";
function revealFile(value) {
    var file = castFile(value);
    if (!file.exists) {
        return false;
    }
    var folder = castFolder(file.path);
    return folder.execute();
}
export default revealFile;
