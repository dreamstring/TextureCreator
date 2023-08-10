import collectionEach from "./_internal/_collectionEach";
function eachRenderQueueItems(renderQueue, iteratee) {
    collectionEach(renderQueue.items, function (value, index) {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
}
export default eachRenderQueueItems;
