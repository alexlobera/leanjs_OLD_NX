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
  return url && url.slice(-1) === '/' ? url.slice(0, -1) : url
}

function portableTextToPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the parapgraphs leaving split by two linebreaks
      .join('\n\n')
  )
}

function stripHtmlTagsFromText(text) {
  return text ? text.replace(/(<([^>]+)>)/gi, '') : ''
}

module.exports = {
  portableTextToPlainText,
  titleCase,
  slugify,
  capitalize,
  removeTrailingSlash,
  stripHtmlTagsFromText,
}
