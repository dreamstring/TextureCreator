import castFile from "./_internal/_castFile";
function copyFile(sourceFile, newPath) {
    var source = castFile(sourceFile);
    if (!source.exists) {
        return false;
    }
    var target = castFile(newPath);
    if (source.fullName === target.fullName) {
        return false;
    }
    return source.copy(target.fsName);
}
export default copyFile;
