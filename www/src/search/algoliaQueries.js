const {
  getHeadings,
  getPostDataFromSanityPostNode,
  getPostDataFromMarkdownNode,
} = require('../components/blog/utils')
const { stripHtmlTagsFromText } = require('../components/utils/text')

const peopleQuery = `{
    
  }`
const postsQuery = `{
    allMarkdownRemark(filter: {frontmatter: {contentType: {eq: "blog"}}}) {
        nodes {
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              author
              imageUrl
              tags
            }
            excerpt
        }
    }
    allSanityPost(limit: 10000) {
      nodes {
        title
        mainImage {
          asset {
            localFile(width: 500, height: 333) {
              publicURL
              childImageSharp {
                fluid(maxWidth: 600) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
        subtitle
        excerpt(limit: 500)
        category
        tags {
          name
        }
        author {
          fullname
        }
        slug {
          current
        }
        _rawBody(resolveReferences: {maxDepth: 5})
      }
    }
  }
  
`

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => {
      const sanityPosts = data.allSanityPost.nodes.map(node => {
        const { author, tags, _rawBody, ...rest } = node
        const {
          _rawBody: removeRawBody,
          ...postData
        } = getPostDataFromSanityPostNode(node)
        return {
          authorName: author.fullname,
          tags: tags.map(({ name }) => name),
          headings: getHeadings({ rawBody: _rawBody }).join(','),
          ...rest,
          ...postData,
          title: stripHtmlTagsFromText(postData.title),
        }
      })

      const markdownPosts = data.allMarkdownRemark.nodes.map(node => {
        const {
          frontmatter: { author, ...frontmatterRest },
          fields,
          excerpt,
        } = node

        const postData = {
          ...frontmatterRest,
          ...fields,
          excerpt,
          ...getPostDataFromMarkdownNode(node),
          title: stripHtmlTagsFromText(frontmatterRest.title),
        }

        return { authorName: author.replace(/-|_/g, ' '), ...postData }
      })

      return [...markdownPosts, ...sanityPosts]
    },
    indexName: `Posts`,
    settings: {
      searchableAttributes: [
        'title',
        'unordered(subtitle)',
        'authorName',
        'excerpt,headings',
        'unordered(tags)',
        'category',
      ],
    },
  },
]
module.exports = queries
