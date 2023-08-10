import forEach from "./lodash/#forEach";
import padStart from "./lodash/#padStart";
import times from "./lodash/#times";
import castFolder from "./_internal/_castFolder";
import createPath from "./createPath";
import saveFrameToPng from "./saveFrameToPng";
import secondToFrames from "./secondToFrames";
import templateString from "./templateString";
function savePngSequence(compItem, outputPath, suffix) {
    if (suffix === void 0) { suffix = compItem.name; }
    var folder = castFolder(outputPath);
    if (!folder.exists) {
        folder.create();
    }
    var folderPath = folder.fsName;
    var frameRate = compItem.frameRate;
    var start = secondToFrames(compItem.workAreaStart, frameRate);
    var duraion = secondToFrames(compItem.workAreaDuration, frameRate);
    var frameDigtis = String(duraion).length;
    var frameDuration = compItem.frameDuration;
    var files = times(duraion, function (index) {
        var sequenceNumber = padStart(String(start + index), frameDigtis, "0");
        return new File(createPath(folderPath, templateString("${0}_${1}.png", suffix, sequenceNumber)));
    });
    forEach(files, function (file, index) {
        saveFrameToPng(file, compItem, index * frameDuration);
    });
}
export default savePngSequence;
