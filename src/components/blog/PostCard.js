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
  imageProps: { sx = {}, ...imageRest } = {},
}) => {
  const formatedTitle = formatPostTitle(title)
  if (fluidImage) {
    imageRest.fluid = fluidImage
  } else {
    imageRest.src = imageUrl
  }

  return (
    <Card small variant="secondary" sx={{ mb: 5 }}>
      <Link to={`${path}`} className="articles-summary">
        <Image
          {...(imageRest || {})}
          alt={formatedTitle}
          sx={{ ...sx, mb: 0 }}
        />
      </Link>
      <Box sx={{ p: 2 }}>
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

export default React.memo(PostCard)
