import collectionEach from "./_internal/_collectionEach";
function eachOutputModules(renderQueueItem, iteratee) {
    collectionEach(renderQueueItem.outputModules, function (value, index) {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
}
export default eachOutputModules;
