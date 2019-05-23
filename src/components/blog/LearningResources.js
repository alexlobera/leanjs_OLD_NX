import React from 'react'
import styled from 'styled-components'
import { Card, Image } from 'src/components/elements'
import { H2, H3, H4, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { formatPostTitle } from 'src/templates/blog-post'
import { LinkButton } from 'src/components/buttons'

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

const LearningResources = ({ resources = [], type = '' }) => (
  <React.Fragment>
    <H2>Latest {type} Blogs</H2>
    <LearningResourcesWrapper>
      {resources.map(({ node: post }) => {
        return (
          <Card key={post.fields.slug} border="shadow" small bottom={36}>
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
    <H3>Get {type} learning resources</H3>
    <P>
      Over 5 weeks, we email you directly with free resources{' '}
      <strong>
        directly from our{' '}
        <Link to={`/${type.toLowerCase()}/curriculum`}>
          <strong>{type} Curriculum</strong>
        </Link>
      </strong>{' '}
      . We'd love for you to enjoy and learn from them!{' '}
    </P>
    <LinkButton variant="primary" to="#newsletter">
      Sign up now
    </LinkButton>
  </React.Fragment>
)

export default LearningResources
