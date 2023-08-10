import collectionEachRight from "./_internal/_collectionEachRight";
function eachRenderQueueItemsRight(renderQueue, iteratee) {
    collectionEachRight(renderQueue.items, function (value, index) {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
}
export default eachRenderQueueItemsRight;
