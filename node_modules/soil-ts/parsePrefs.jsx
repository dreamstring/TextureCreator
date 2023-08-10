import map from "./lodash/#map";
import zipObject from "./lodash/#zipObject";
import extractPrefskeyName from "./_internal/_extractPrefskeyName";
import partitionPrefsPairs from "./_internal/_partitionPrefsPairs";
import splitPrefsPairs from "./_internal/_splitPrefsPairs";
import splitPrefsSection from "./_internal/_splitPrefsSection";
import trimPrefsBlankChar from "./_internal/_trimPrefsBlankChar";
import readFile from "./readFile";
function parsePrefs(path) {
    var splitSection = splitPrefsSection(readFile(path));
    var groupedSection = partitionPrefsPairs(splitSection);
    var section = map(groupedSection[0], extractPrefskeyName);
    var pairs = map(map(groupedSection[1], splitPrefsPairs), function (values) {
        var groupedPairs = partitionPrefsPairs(values);
        var keys = map(groupedPairs[0], extractPrefskeyName);
        return zipObject(keys, map(groupedPairs[1], trimPrefsBlankChar));
    });
    return zipObject(section, pairs);
}
export default parsePrefs;
