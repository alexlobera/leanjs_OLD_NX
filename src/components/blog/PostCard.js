import React from 'react'

import { H3, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Card, Image } from '../../components/elements'
import Box from '../../components/layout/Box'
import { formatPostTitle } from '../../templates/blog-post'

const PostCard = ({ post }) => (
  <Card border="shadow" padding={false} bottom={36}>
    <Link to={`${post.fields.slug}`}>
      <Image
        src={post.frontmatter.imageUrl}
        alt={formatPostTitle(post.frontmatter.title)}
      />
    </Link>
    <Box p={3}>
      <Link to={`${post.fields.slug}`} className="articles-summary">
        <H3>{formatPostTitle(post.frontmatter.title)}</H3>
      </Link>
      <P>{post.excerpt}</P>
      <P>
        <Link to={`${post.fields.slug}`} className="articles-summary">
          Read more
        </Link>
      </P>
    </Box>
  </Card>
)

export default PostCard
