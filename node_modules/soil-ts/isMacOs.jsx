import isWindowsOs from "./isWindowsOs";
function isMacOs() {
    return !isWindowsOs();
}
export default isMacOs;
