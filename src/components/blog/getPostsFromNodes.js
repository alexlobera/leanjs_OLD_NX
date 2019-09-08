function getPostsFromNodes({ markdownNodes, sanityNodes }) {
  const sanityPosts =
    sanityNodes &&
    sanityNodes.map &&
    sanityNodes.map(({ slug, category, mainImage, title, excerpt }) => ({
      path: `/${category}/${slug ? slug.current : ''}`,
      imageUrl:
        mainImage &&
        mainImage.asset &&
        mainImage.asset.localFile &&
        mainImage.asset.localFile.publicURL,
      title,
      excerpt,
    }))

  const markdownPosts =
    markdownNodes &&
    markdownNodes.map &&
    markdownNodes.map(node => ({
      path: node.fields.slug,
      imageUrl: node.frontmatter.imageUrl,
      // || (node.frontmatter.imageSrc &&
      //   node.frontmatter.imageSrc.childImageSharp.fluid.src),
      title: node.frontmatter.title,
      excerpt: node.excerpt,
    }))

  return [...(sanityPosts || []), ...(markdownPosts || [])]
}

module.exports = getPostsFromNodes
