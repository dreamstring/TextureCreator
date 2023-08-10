import castFile from "./_internal/_castFile";
function readFile(path, encoding) {
    if (encoding === void 0) { encoding = "utf-8"; }
    var file = castFile(path);
    if (!file.exists) {
        return null;
    }
    file.encoding = encoding;
    file.open("r");
    var contents = file.read();
    file.close();
    return contents;
}
export default readFile;
