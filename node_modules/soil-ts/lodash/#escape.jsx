import { htmlEscapes, reHasUnescapedHtml, reUnescapedHtml } from "./basic/_global";
function escape(string) {
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, function (chr) { return htmlEscapes[chr]; }) : string || "";
}
export default escape;
