export const escapeHtml = (str) => {
    var map =
      {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&uuml;': 'ü',
        '&ldquo;': '“',
        '&rdquo;': '“'
      };
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) { return map[m]; });
  }