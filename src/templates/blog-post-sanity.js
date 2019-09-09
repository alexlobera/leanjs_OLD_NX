import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import {
  Code,
  Blockquote,
  Codesandbox,
  Img,
} from '../components/blog/BlockContent'
import BlogPost from '../components/blog/BlogPost'
import Tweet from '../components/blog/Tweet'
import Video from '../components/elements/Video'
import Link from '../components/navigation/Link'
import Ul, { Li } from '../components/layout/Ul'
import { H2, H3, H4, H5 } from '../components/text/H'
import P from '../components/text/P'
import getPostsFromNodes from '../components/blog/getPostsFromNodes'

const Page = ({ data, pageContext: { slug } }) => {
  const { nodes: bodyImageNodes = [] } = data.bodyImages || []
  const bodyImagePublicURLs = bodyImageNodes.reduce(
    (acc, { localFile = {}, id }) => {
      acc[id] = localFile.publicURL

      return acc
    },
    {}
  )

  const serializers = {
    marks: {
      link: ({ mark: { href }, children }) => (
        <Link to={href} children={children} />
      ),
    },
    list: ({ children }) => <Ul children={children} />,
    listItem: ({ children = {} }) => <Li children={children} />,
    types: {
      block: ({ children, node }) => {
        const style = node.style || 'normal'
        let props = {
          children,
        }
        switch (style) {
          case 'h2':
            return <H2 {...props} />
          case 'h3':
            return <H3 {...props} />
          case 'h4':
            return <H4 {...props} />
          case 'h5':
            return <H5 {...props} />
          case 'blockquote':
            return <Blockquote {...props} />
          default:
            return <P {...props} />
        }
      },
      code: ({ node }) => <Code className={node.language}>{node.code}</Code>,
      tweet: ({ node }) => <Tweet id={node.id} />,
      youtube: ({ node }) => <Video youtubeId={node.id} />,
      codesandbox: ({ node }) => <Codesandbox id={node.id} />,
      image: props => <Img src={bodyImagePublicURLs[props.node.asset.id]} />,
    },
  }

  const {
    category,
    author,
    mainImage,
    title,
    subtitle,
    publishedAt: date,
    _rawBody,
    readingTimeInMinutes,
  } = data.sanityPost

  const mainImagePublicUrl =
    mainImage &&
    mainImage.asset &&
    mainImage.asset.localFile &&
    mainImage.asset.localFile.publicURL
  const { fullname, twitter, username = {}, image: authorImage } = author || {}
  const postTypeLabel =
    category === 'react' ? 'React' : category === 'graphql' ? 'GraphQL' : 'Blog'
  const authorImageUrl =
    authorImage &&
    authorImage.asset &&
    authorImage.asset.localFile &&
    authorImage.asset.localFile.publicURL

  const body = <BlockContent blocks={_rawBody} serializers={serializers} />
  const relatedPosts = getPostsFromNodes({
    markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  })

  const blogPostProps = {
    body,
    postTypeLabel,
    postTypePath: category,
    slug,
    authorImageUrl,
    authorFullname: fullname,
    authorTwitter: twitter,
    authorSlug: username.current,
    mainImagePublicUrl,
    title,
    subtitle,
    date,
    timeToRead: readingTimeInMinutes,
    relatedPosts,
  }
  return <BlogPost {...blogPostProps} />
}

export const query = graphql`
  query sanityPost(
    $id: String!
    $sanityImageAssetIds: [String] = []
    $tags: [String] = []
    $slug: String!
  ) {
    markdownPosts: allMarkdownRemark(
      filter: {
        frontmatter: { contentType: { eq: "blog" }, tags: { in: $tags } }
        fields: { slug: { ne: $slug } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }

    sanityNodes: allSanityPost(
      filter: {
        tags: { elemMatch: { name: { in: $tags } } }
        slug: { current: { ne: $slug } }
      }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }

    bodyImages: allSanityImageAsset(
      filter: { id: { in: $sanityImageAssetIds } }
    ) {
      nodes {
        id
        localFile(width: 600) {
          publicURL
        }
      }
    }
    sanityPost(id: { eq: $id }) {
      _rawBody(resolveReferences: { maxDepth: 5 })
      title
      subtitle
      publishedAt
      readingTimeInMinutes
      author {
        twitter
        fullname
        username {
          current
        }
        image {
          asset {
            localFile(width: 250) {
              publicURL
            }
          }
        }
      }
      category
      slug {
        current
      }
      mainImage {
        asset {
          id
          localFile(width: 1440) {
            publicURL
          }
        }
      }
    }
  }
`
export default Page
