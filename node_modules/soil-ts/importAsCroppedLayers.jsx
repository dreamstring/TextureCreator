import importFile from "./importFile";
function importAsCroppedLayers(file, sequence) {
    return importFile(file, ImportAsType.COMP_CROPPED_LAYERS, sequence);
}
export default importAsCroppedLayers;
