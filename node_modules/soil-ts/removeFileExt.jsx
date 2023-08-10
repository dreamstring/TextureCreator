function removeFileExt(fileName) {
    return fileName.replace(/\.[^\.]+$/, "");
}
export default removeFileExt;
