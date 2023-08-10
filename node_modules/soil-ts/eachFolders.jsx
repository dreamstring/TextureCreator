import forEach from "./lodash/#forEach";
import getFiles from "./_internal/_getFiles";
import isFolder from "./isFolder";
function eachFolders(folder, iteratee) {
    var resIndex = 0;
    forEach(getFiles(folder), function (unknownFile, index, files) {
        if (isFolder(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}
export default eachFolders;
