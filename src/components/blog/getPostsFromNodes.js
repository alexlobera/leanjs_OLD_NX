function getPostsFromNodes({ markdownNodes, sanityNodes }) {
  const sanityPosts =
    sanityNodes &&
    sanityNodes.map &&
    sanityNodes.map(({ slug, category, mainImage, title, excerpt }) => {
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
      }
    })

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

module.exports = getPostsFromNodes
