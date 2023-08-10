import castFile from "./_internal/_castFile";
function evalFile(path) {
    var file = castFile(path);
    return $.evalFile(file.alias ? file.resolve() : file);
}
export default evalFile;
