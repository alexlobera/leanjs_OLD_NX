import React from 'react'
import { graphql } from 'gatsby'

import { H3, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Image } from '../../components/elements'
import Card from '../../components/elements/Card'
import Box from '../../components/layout/Box'
import { formatPostTitle } from './BlogPost'

const PostCard = ({
  post: { path, imageUrl, fluidImage, title, excerpt },
  imageProps = {},
}) => {
  const formatedTitle = formatPostTitle(title)
  if (fluidImage) {
    imageProps.fluid = fluidImage
  } else {
    imageProps.src = imageUrl
  }
  return (
    <Card small variant="secondary" mb={5}>
      <Link to={`${path}`} className="articles-summary">
        <Image {...imageProps} alt={formatedTitle} mb={0} />
      </Link>
      <Box p={2}>
        <Link to={`${path}`} className="articles-summary">
          <H3>{formatedTitle}</H3>
        </Link>
        <P>{excerpt}</P>
        <P>
          <Link to={`${path}`} className="articles-summary">
            Read more
          </Link>
        </P>
      </Box>
    </Card>
  )
}

export const query = graphql`
  fragment SanityPostItemFragment on SanityPost {
    title
    excerpt
    category
    mainImage {
      asset {
        localFile(width: 500, height: 333) {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    slug {
      current
    }
  }

  fragment MarkdownPostItemFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      imageUrl
    }
    excerpt
  }
`

export default PostCard
