import eachFiles from "./eachFiles";
function filterFiles(folder, predicate) {
    var result = [];
    eachFiles(folder, function (file, index, files) {
        if (predicate(file, index, files)) {
            result.push(file);
        }
    });
    return result;
}
export default filterFiles;
