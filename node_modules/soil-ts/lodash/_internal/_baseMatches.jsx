import baseIsMatch from "./_baseIsMatch";
import getMatchData from "./_getMatchData";
import matchesStrictComparable from "./_matchesStrictComparable";
function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length === 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function (object) { return object === source || baseIsMatch(object, source, matchData); };
}
export default baseMatches;
