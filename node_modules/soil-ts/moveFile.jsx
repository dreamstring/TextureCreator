import castFile from "./_internal/_castFile";
function moveFile(path, newPath) {
    var file = castFile(path);
    return file.exists ? false : file.rename(newPath);
}
export default moveFile;
