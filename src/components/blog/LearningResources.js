import React from 'react'
import { H2 } from 'src/components/text'
import Box from '../layout/Box'
import PostCard from './PostCard'
import { LinkButton } from '../buttons'

const LearningResources = ({ resources = [], type = '' }) => (
  <React.Fragment>
    <H2>Latest {type} Blogs</H2>
    <Box mt={5}>
      {resources.map(({ node }) => (
        <PostCard
          post={node}
          imageProps={{ objectFit: 'cover', width: '100%', maxHeight: '8rem' }}
        />
      ))}
    </Box>
    <LinkButton to="/blog">Read blog</LinkButton>
  </React.Fragment>
)

export default LearningResources
