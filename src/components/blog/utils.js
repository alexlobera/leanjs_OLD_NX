const { slugify } = require('../utils/text')

function getPostsFromNodes({ markdownNodes, sanityNodes }) {
  const sanityPosts =
    sanityNodes &&
    sanityNodes.map &&
    sanityNodes.map(
      ({
        slug,
        category,
        mainImage,
        title,
        excerpt,
        _rawBody,
        publishedAt,
      }) => {
        const sanityLocalFile =
          mainImage && mainImage.asset && mainImage.asset.localFile

        return {
          path: `/${category}/${slug ? slug.current : ''}`,
          imageUrl: sanityLocalFile && sanityLocalFile.publicURL,
          fluidImage:
            sanityLocalFile &&
            sanityLocalFile.childImageSharp &&
            sanityLocalFile.childImageSharp.fluid,
          title,
          excerpt,
          _rawBody,
          publishedAt,
        }
      }
    )

  const markdownPosts =
    markdownNodes &&
    markdownNodes.map &&
    markdownNodes.map(node => ({
      path: node.fields.slug,
      imageUrl: node.frontmatter.imageUrl,
      title: node.frontmatter.title,
      excerpt: node.excerpt,
    }))

  return [...(sanityPosts || []), ...(markdownPosts || [])]
}

function getContents({ rawBody }) {
  return rawBody.reduce((accContents, currentBlock) => {
    if (currentBlock.style === 'h2') {
      const text = currentBlock.children
        .map(({ text }) => text)
        .join(' ')
        .trim()

      accContents.push({ text, slug: slugify(text) })
    }

    return accContents
  }, [])
}

const createPortableTextListItem = ({ text, slug }) => {
  const key1 = Math.random().toString()
  const key2 = Math.random().toString()
  const key3 = Math.random().toString()
  const key4 = Math.random().toString()

  return {
    _key: key1,
    _type: 'block',
    children: [
      {
        _key: key2,
        _type: 'span',
        marks: [],
        text: `${text}, `,
      },
      {
        _key: key3,
        _type: 'span',
        marks: [key4],
        text: ' go to section',
      },
    ],
    level: 1,
    listItem: 'bullet',
    markDefs: [
      {
        _key: key4,
        _type: 'link',
        href: slug,
      },
    ],
    style: 'normal',
  }
}

module.exports = {
  getPostsFromNodes,
  getContents,
  createPortableTextListItem,
}
