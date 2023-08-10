import { reScriptFileName } from "./_internal/_global";
function isScriptFile(file) {
    return reScriptFileName.test(file.displayName);
}
export default isScriptFile;
