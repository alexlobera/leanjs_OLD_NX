import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import {
  Code,
  // Blockquote,
  Codesandbox,
  Img,
} from '../components/blog/BlockContent'
import BlogPost from '../components/blog/BlogPost'
import Tweet from '../components/blog/Tweet'
import Video from '../components/elements/Video'
import Link from '../components/navigation/Link'

const Page = ({ data, pageContext: { relatedPosts, slug, timeToRead } }) => {
  const { nodes: bodyImageNodes = [] } = data.bodyImages || []
  const bodyImagePublicURLs = bodyImageNodes.reduce(
    (acc, { localFile = {}, id }) => {
      acc[id] = localFile.publicURL

      return acc
    },
    {}
  )

  const serializers = {
    types: {
      link: ({ node }) => <Link to={node.href} />,
      code: ({ node }) => <Code className={node.language}>{node.code}</Code>,
      tweet: ({ node }) => <Tweet id={node.id} />,
      youtube: ({ node }) => <Video youtubeId={node.id} />,
      //blockquote: ({ node }) => <Blockquote id={node.id} />,
      codesandbox: ({ node }) => <Codesandbox id={node.id} />,
      image: props => <Img src={bodyImagePublicURLs[props.node.asset.id]} />,
    },
  }

  const {
    tech,
    author,
    mainImage,
    title,
    subtitle,
    publishedAt: date,
    _rawBody,
  } = data.sanityPost

  const mainImagePublicUrl =
    mainImage &&
    mainImage.asset &&
    mainImage.asset.localFile &&
    mainImage.asset.localFile.publicURL
  const { fullname, twitter, username = {}, image: authorImage } = author || {}
  const postTypeLabel =
    tech === 'react' ? 'React' : tech === 'graphql' ? 'GraphQL' : 'Blog'
  const authorImageUrl =
    authorImage &&
    authorImage.asset &&
    authorImage.asset.localFile &&
    authorImage.asset.localFile.publicURL
  const body = <BlockContent blocks={_rawBody} serializers={serializers} />
  const blogPostProps = {
    body,
    postTypeLabel,
    postTypePath: tech,
    slug,
    authorImageUrl,
    authorFullname: fullname,
    authorTwitter: twitter,
    authorSlug: username.current,
    mainImagePublicUrl,
    title,
    subtitle,
    date,
    relatedPosts,
    timeToRead,
  }

  return <BlogPost {...blogPostProps} />
}

export const query = graphql`
  query sanityPost($id: String!, $sanityImageAssetIds: [String] = []) {
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
      tech
      slug {
        current
      }
      mainImage {
        asset {
          id
          localFile {
            publicURL
          }
        }
      }
    }
  }
`
export default Page
