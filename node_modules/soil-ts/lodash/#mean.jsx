import baseMean from "./#meanBy";
function mean(array) {
    return baseMean(array, function (value) { return value; });
}
export default mean;
