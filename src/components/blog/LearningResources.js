import React from 'react'
import { H2, H3, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { LinkButton } from 'src/components/buttons'
import Box from '../layout/Box'
import PostCard from './PostCard'

const LearningResources = ({ resources = [], type = '' }) => (
  <React.Fragment>
    <H2>Latest {type} Blogs</H2>
    <Box mt={5}>
      {resources.map(({ node }) => (
        <PostCard
          post={node}
          p={4}
          imageProps={{ objectFit: 'cover', width: '100%', maxHeight: '8rem' }}
        />
      ))}
    </Box>
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
