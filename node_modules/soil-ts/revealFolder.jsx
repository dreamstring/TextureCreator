import castFolder from "./_internal/_castFolder";
function revealFolder(value) {
    var newFolder = castFolder(value);
    return newFolder.exists ? newFolder.execute() : false;
}
export default revealFolder;
