import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFolder from "./isFolder";
function eachFoldersRight(folder, iteratee) {
    var resIndex = 0;
    forEachRight(getFiles(folder), function (unknownFile, index, files) {
        if (isFolder(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}
export default eachFoldersRight;
