import reduce from "./#reduce";
function partition(array, predicate) {
    return reduce(array, function (result, value, index) { return (result[predicate(value, index) ? 0 : 1].push(value), result); }, [[], []]);
}
export default partition;
