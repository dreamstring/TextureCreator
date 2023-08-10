import castFile from "./_internal/_castFile";
import newFolder from "./_internal/_newFolder";
function writeFile(path, content, encoding, mode) {
    if (encoding === void 0) { encoding = "utf-8"; }
    if (mode === void 0) { mode = "w"; }
    var file = castFile(path);
    file.encoding = encoding;
    var fileFolder = newFolder(file.path);
    if (!fileFolder.exists) {
        fileFolder.create();
    }
    return file.open(mode) && file.write(content) && file.close();
}
export default writeFile;
