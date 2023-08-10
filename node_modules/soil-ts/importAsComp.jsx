import importFile from "./importFile";
function importAsComp(file, sequence) {
    return importFile(file, ImportAsType.COMP, sequence);
}
export default importAsComp;
