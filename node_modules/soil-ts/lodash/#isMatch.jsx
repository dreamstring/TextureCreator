import baseIsMatch from "./_internal/_baseIsMatch";
import getMatchData from "./_internal/_getMatchData";
function isMatch(object, source) {
    return object === source || baseIsMatch(object, source, getMatchData(source));
}
export default isMatch;
