import forEach from "./lodash/#forEach";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";
function eachFiles(folder, iteratee) {
    var resIndex = 0;
    forEach(getFiles(folder), function (unknownFile, index, files) {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}
export default eachFiles;
