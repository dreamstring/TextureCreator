import newFolder from "../_internal/_newFolder";
import isFolder from "../isFolder";
function castFolder(folder) {
    return isFolder(folder) ? folder : newFolder(folder);
}
export default castFolder;
