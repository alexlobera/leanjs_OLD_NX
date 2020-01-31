function titleCase(txt) {
  return txt
    ? txt.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    : ''
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '_')
    .replace(/^-+|-+$/g, '')
}

function capitalize(text) {
  return typeof text !== 'string'
    ? ''
    : text
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
}

function removeTrailingSlash(url) {
  return url.slice(-1) === '/' ? url.slice(0, -1) : url
}

module.exports = {
  titleCase,
  slugify,
  capitalize,
  removeTrailingSlash,
}
