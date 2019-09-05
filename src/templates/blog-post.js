import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import BlogPost from '../components/blog/BlogPost'

const Page = ({ data, pageContext: { relatedPosts, slug } }) => {
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
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      image: props => <img src={bodyImagePublicURLs[props.node.asset.id]} />,
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
    timeToRead: null, // Not handled yet
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
