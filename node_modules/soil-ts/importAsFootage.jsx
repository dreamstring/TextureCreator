import importFile from "./importFile";
function importAsFootage(file, sequence) {
    return importFile(file, ImportAsType.FOOTAGE, sequence);
}
export default importAsFootage;
