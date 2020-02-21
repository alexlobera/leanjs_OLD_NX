import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import {
  Code,
  Blockquote,
  Codesandbox,
  Img,
} from '../components/blog/BlockContent'
import BlogPost, {
  BlogPostP,
  BlogPostLi,
  BlogPostLink,
  BlogPostSpan,
} from '../components/blog/BlogPost'
import Tweet from '../components/blog/Tweet'
import Video from '../components/elements/Video'
import TedVideo from '../components/elements/TedVideo'
import Ul from '../components/layout/Ul'
import { H2, H3, H4, H5 } from '../components/text/H'
import { getPostsFromNodes, getContents } from '../components/blog/utils'
import { slugify } from '../components/utils/text'
import SanityForm from '../components/blog/SanityForm'

function renderHeadingWithAnchor({ children, Component }) {
  const formatedChildren = (Array.isArray(children) ? children : [children])
    .map(child =>
      typeof child === 'string'
        ? child
        : child && child.props && child.props.node && child.props.node.children
    )
    .filter(child => child)
    .join(' ')

  return (
    <Component>
      <a name={slugify(formatedChildren)} />
      {formatedChildren}
    </Component>
  )
}

function removeCarriageReturn(text) {
  if (text && typeof text === 'string') {
    return text.replace(/[\n\r]+/g, '')
  } else {
    return text
  }
}

const Page = ({ data, location, ...rest }) => {
  const { nodes: bodyImageNodes = [] } = data.bodyImages || {}
  const bodyImagePublicURLs = bodyImageNodes.reduce(
    (acc, { localFile = {}, id }) => {
      const baseUrl = process.env.GATSBY_BASE_URL
      const { publicURL = '' } = localFile
      acc[id] =
        publicURL.indexOf('http') === 0 || !baseUrl
          ? publicURL
          : `${baseUrl}${publicURL}`

      return acc
    },
    {}
  )

  const serializers = {
    marks: {
      link: ({ mark: { href }, children }) => (
        <BlogPostLink to={href} children={children} />
      ),
    },
    list: ({ children }) => <Ul children={children} />,
    listItem: ({ children = {} }) => <BlogPostLi children={children} />,
    hardBreak: null,
    types: {
      block: ({ children, node }) => {
        const style = node.style || 'normal'
        switch (style) {
          case 'h2':
            return renderHeadingWithAnchor({ children, Component: H2 })
          case 'h3':
            return renderHeadingWithAnchor({ children, Component: H3 })
          case 'h4':
            return renderHeadingWithAnchor({ children, Component: H4 })
          case 'h5':
            return renderHeadingWithAnchor({ children, Component: H5 })
          case 'blockquote':
            return <Blockquote children={children} />
          default:
            const formatedChildren =
              children &&
              children.reduce &&
              children.reduce((acc, curr) => {
                const element = removeCarriageReturn(curr)
                if (element) {
                  acc.push(element)
                }

                return acc
              }, [])

            return formatedChildren && formatedChildren.length ? (
              <BlogPostP children={formatedChildren} />
            ) : null
        }
      },
      code: ({ node }) => <Code className={node.language}>{node.code}</Code>,
      tweet: ({ node }) => <Tweet id={node.id} />,
      youtube: ({ node }) => (
        <Video
          sx={{ mb: 3, mt: 3 }}
          time={node.startSecond}
          youtubeId={node.videoId}
        />
      ),
      form: ({ node }) => <SanityForm data={node} />,
      span: BlogPostSpan,
      tedvideo: ({ node }) => (
        <TedVideo embedUrl={node.embedUrl} description={node.description} />
      ),
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
    excerpt,
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

  const authorLocalFile =
    authorImage && authorImage.asset && authorImage.asset.localFile
  const authorFixedImg =
    authorLocalFile &&
    authorLocalFile.childImageSharp &&
    authorLocalFile.childImageSharp.fixed

  const metaImageFullPublicUrl =
    mainImage &&
    mainImage.asset &&
    mainImage.asset.fixed &&
    mainImage.asset.fixed.src

  const body = <BlockContent blocks={_rawBody} serializers={serializers} />
  const relatedPosts = getPostsFromNodes({
    markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  })
  const contents = getContents({ rawBody: _rawBody })

  const blogPostProps = {
    body,
    postTypeLabel,
    postTypePath: category,
    slug: location.pathname,
    authorFixedImg,
    authorFullname: fullname,
    authorTwitter: twitter || 'reactgqlacademy',
    authorSlug: username.current,
    mainImagePublicUrl,
    title,
    subtitle,
    date,
    timeToRead: readingTimeInMinutes,
    relatedPosts,
    contents,
    metaImageFullPublicUrl,
    location,
    metaDescription: subtitle || excerpt,
    ...rest,
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
        localFile(width: 650) {
          publicURL
        }
      }
    }
    sanityPost(id: { eq: $id }) {
      _rawBody(resolveReferences: { maxDepth: 5 })
      title
      subtitle
      excerpt(limit: 250)
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
            localFile(width: 108) {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
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
          fixed(width: 1200) {
            src
          }
          localFile(width: 1200) {
            publicURL
          }
        }
      }
    }
  }
`

export default Page
