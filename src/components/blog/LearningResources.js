import React from 'react'
import styled from 'styled-components'
import { Card, Image } from 'src/components/elements'
import { H4, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { formatPostTitle } from 'src/templates/blog-post'

const LearningResource = styled.div`
  img {
    max-height: 8rem;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0;
  }
  h4 p {
    margin: 0.5rem 2rem;
  }
  h4 {
    margin-top: 1rem;
  }
`

const LearningResourcesWrapper = styled.div`
  margin-top: 2rem;
`

const LearningResources = ({ resources = [] }) => (
  <LearningResourcesWrapper>
    {resources.map(({ node: post }) => {
      return (
        <Card border="shadow" small bottom={36}>
          <LearningResource>
            <Image
              src={post.frontmatter.imageUrl}
              alt={formatPostTitle(post.frontmatter.title)}
            />
            <Link to={post.fields.slug}>
              <H4>{formatPostTitle(post.frontmatter.title)}</H4>
            </Link>
            <P>
              {post.excerpt} <Link to={post.fields.slug}>Learn More</Link>
            </P>
          </LearningResource>
        </Card>
      )
    })}
  </LearningResourcesWrapper>
)

export default LearningResources
