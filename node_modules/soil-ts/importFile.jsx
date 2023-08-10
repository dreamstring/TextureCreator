import castFile from "./_internal/_castFile";
function importFile(path, importType, sequence) {
    if (sequence === void 0) { sequence = false; }
    var file = castFile(path);
    var options = new ImportOptions(file);
    if (!options.canImportAs(importType)) {
        return null;
    }
    options.importAs = importType;
    options.sequence = sequence;
    return app.project.importFile(options);
}
export default importFile;
