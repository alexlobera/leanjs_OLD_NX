exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  const newHeaderComponents = headComponents.filter(
    ({ key = '', type = '' } = {}) =>
      !(key && key.startsWith('styles-') && type === 'link')
  )
  replaceHeadComponents(newHeaderComponents)
}
