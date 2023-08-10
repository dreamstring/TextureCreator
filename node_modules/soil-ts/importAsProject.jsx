import importFile from "./importFile";
function importAsProject(file) {
    return importFile(file, ImportAsType.PROJECT);
}
export default importAsProject;
