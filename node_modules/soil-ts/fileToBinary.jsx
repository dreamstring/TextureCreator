import readFile from "./readFile";
function fileToBinary(file) {
    var content = readFile(file, "binary");
    return content === null ? "" : content.toSource();
}
export default fileToBinary;
