export var arrayProto = Array.prototype;
export var objectProto = Object.prototype;
export var hasOwnProperty = objectProto.hasOwnProperty;
export var nativeConcat = arrayProto.concat;
export var nativeJoin = arrayProto.join;
export var nativePush = arrayProto.push;
export var nativeSlice = arrayProto.slice;
export var nativeToString = objectProto.toString;
export var nativeCeil = Math.ceil;
export var nativeFloor = Math.floor;
export var nativeMax = Math.max;
export var nativeMin = Math.min;
export var nativeRandom = Math.random;
export var nativeRound = Math.round;
export var nativeParseFloat = parseFloat;
export var nativeParseInt = parseInt;
export var NAN = 0 / 0;
export var INFINITY = 1 / 0;
export var MAX_ARRAY_LENGTH = 4294967295;
export var MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;
export var HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
export var MAX_INTEGER = 1.7976931348623157e308;
export var MAX_SAFE_INTEGER = 9007199254740991;
export var reTrim = /^\s+|\s+$/g;
export var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
export var reIsBinary = /^0b[01]+$/i;
export var reIsOctal = /^0o[0-7]+$/i;
export var reTrimStart = /^\s+/;
export var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};
export var htmlUnescapes = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
};
export var reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
export var reHasEscapedHtml = RegExp(reEscapedHtml.source);
export var reUnescapedHtml = /[&<>"']/g;
export var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
export var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
export var reHasRegExpChar = RegExp(reRegExpChar.source);
export var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
export var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
export var reIsNative = /^\nfunction.*?\(\) \{\n    \[native code\]\n\}\n$/;
export var reQuotes = /['\u2019]/g;
export var reFlags = /\w*$/;
export var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
export var reIsPlainProp = /^\w*$/;
export var charCodeOfDot = ".".charCodeAt(0);
export var reEscapeChar = /\\(\\)?/g;
export var rePropName = /[^.[\]]+|\[(?:([^"'][^[]*)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
var rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[".concat(rsAstralRange, "]");
var rsCombo = "[".concat(rsComboRange, "]");
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
var rsNonAstral = "[^".concat(rsAstralRange, "]");
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ = "\\u200d";
export var reHasUnicode = RegExp("[".concat(rsZWJ + rsAstralRange + rsComboRange + rsVarRange, "]"));
export var reIsUint = /^(?:0|[1-9]\d*)$/;
var reOptMod = "".concat(rsModifier, "?");
var rsOptVar = "[".concat(rsVarRange, "]?");
var rsOptJoin = "(?:".concat(rsZWJ, "(?:").concat([rsNonAstral, rsRegional, rsSurrPair].join("|"), ")").concat(rsOptVar + reOptMod, ")*");
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsNonAstralCombo = "".concat(rsNonAstral).concat(rsCombo, "?");
var rsSymbol = "(?:".concat([rsNonAstralCombo, rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), ")");
export var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol + rsSeq), "g");
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]";
var rsBreak = "[".concat(rsBreakRange, "]");
var rsDigit = "\\d";
var rsDingbat = "[".concat(rsDingbatRange, "]");
var rsLower = "[".concat(rsLowerRange, "]");
var rsMisc = "[^".concat(rsAstralRange).concat(rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange, "]");
var rsUpper = "[".concat(rsUpperRange, "]");
var rsMiscLower = "(?:".concat(rsLower, "|").concat(rsMisc, ")");
var rsMiscUpper = "(?:".concat(rsUpper, "|").concat(rsMisc, ")");
var rsOptContrLower = "(?:".concat(rsApos, "(?:d|ll|m|re|s|t|ve))?");
var rsOptContrUpper = "(?:".concat(rsApos, "(?:D|LL|M|RE|S|T|VE))?");
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsEmoji = "(?:".concat([rsDingbat, rsRegional, rsSurrPair].join("|"), ")").concat(rsSeq);
export var reUnicodeWords = RegExp(["".concat(rsUpper, "?").concat(rsLower, "+").concat(rsOptContrLower, "(?=").concat([rsBreak, rsUpper, "$"].join("|"), ")"), "".concat(rsMiscUpper, "+").concat(rsOptContrUpper, "(?=").concat([rsBreak, rsUpper + rsMiscLower, "$"].join("|"), ")"), "".concat(rsUpper, "?").concat(rsMiscLower, "+").concat(rsOptContrLower), "".concat(rsUpper, "+").concat(rsOptContrUpper), rsOrdUpper, rsOrdLower, "".concat(rsDigit, "+"), rsEmoji].join("|"), "g");
export var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
export var reComboMark = RegExp(rsCombo, "g");
export var deburredLetters = {
    "\xc0": "A",
    "\xc1": "A",
    "\xc2": "A",
    "\xc3": "A",
    "\xc4": "A",
    "\xc5": "A",
    "\xe0": "a",
    "\xe1": "a",
    "\xe2": "a",
    "\xe3": "a",
    "\xe4": "a",
    "\xe5": "a",
    "\xc7": "C",
    "\xe7": "c",
    "\xd0": "D",
    "\xf0": "d",
    "\xc8": "E",
    "\xc9": "E",
    "\xca": "E",
    "\xcb": "E",
    "\xe8": "e",
    "\xe9": "e",
    "\xea": "e",
    "\xeb": "e",
    "\xcc": "I",
    "\xcd": "I",
    "\xce": "I",
    "\xcf": "I",
    "\xec": "i",
    "\xed": "i",
    "\xee": "i",
    "\xef": "i",
    "\xd1": "N",
    "\xf1": "n",
    "\xd2": "O",
    "\xd3": "O",
    "\xd4": "O",
    "\xd5": "O",
    "\xd6": "O",
    "\xd8": "O",
    "\xf2": "o",
    "\xf3": "o",
    "\xf4": "o",
    "\xf5": "o",
    "\xf6": "o",
    "\xf8": "o",
    "\xd9": "U",
    "\xda": "U",
    "\xdb": "U",
    "\xdc": "U",
    "\xf9": "u",
    "\xfa": "u",
    "\xfb": "u",
    "\xfc": "u",
    "\xdd": "Y",
    "\xfd": "y",
    "\xff": "y",
    "\xc6": "Ae",
    "\xe6": "ae",
    "\xde": "Th",
    "\xfe": "th",
    "\xdf": "ss",
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010a": "C",
    "\u010c": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010b": "c",
    "\u010d": "c",
    "\u010e": "D",
    "\u0110": "D",
    "\u010f": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011a": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011b": "e",
    "\u011c": "G",
    "\u011e": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011d": "g",
    "\u011f": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012a": "I",
    "\u012c": "I",
    "\u012e": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012b": "i",
    "\u012d": "i",
    "\u012f": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013b": "L",
    "\u013d": "L",
    "\u013f": "L",
    "\u0141": "L",
    "\u013a": "l",
    "\u013c": "l",
    "\u013e": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014a": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014b": "n",
    "\u014c": "O",
    "\u014e": "O",
    "\u0150": "O",
    "\u014d": "o",
    "\u014f": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015a": "S",
    "\u015c": "S",
    "\u015e": "S",
    "\u0160": "S",
    "\u015b": "s",
    "\u015d": "s",
    "\u015f": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016a": "U",
    "\u016c": "U",
    "\u016e": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016b": "u",
    "\u016d": "u",
    "\u016f": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017b": "Z",
    "\u017d": "Z",
    "\u017a": "z",
    "\u017c": "z",
    "\u017e": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017f": "s"
};
