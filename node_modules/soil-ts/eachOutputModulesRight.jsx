import collectionEachRight from "./_internal/_collectionEachRight";
function eachOutputModulesRight(renderQueueItem, iteratee) {
    collectionEachRight(renderQueueItem.outputModules, function (value, index) {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
}
export default eachOutputModulesRight;
