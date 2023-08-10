import eachFiles from "./eachFiles";
function mapFiles(folder, iteratee) {
    var result = [];
    eachFiles(folder, function (file, index, files) {
        result[index] = iteratee(file, index, files);
    });
    return result;
}
export default mapFiles;
