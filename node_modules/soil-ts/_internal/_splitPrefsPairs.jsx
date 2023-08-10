import { reSplitPrefsBlock } from "./_global";
function splitPrefsPairs(string) {
    return string.split(reSplitPrefsBlock);
}
export default splitPrefsPairs;
