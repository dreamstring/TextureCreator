import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";
function eachFilesRight(folder, iteratee) {
    var resIndex = 0;
    forEachRight(getFiles(folder), function (unknownFile, index, files) {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}
export default eachFilesRight;
