import React from 'react'

import { H3, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Card, Image } from '../../components/elements'
import Box from '../../components/layout/Box'
import { formatPostTitle } from '../../templates/blog-post'

const PostCard = ({ post, p, pt = 0, pb = 0, imageProps = {} }) => (
  <Card border="shadow" py={0} mb={5} p={p} pt={pt} pb={pb}>
    <Link to={`${post.fields.slug}`} className="articles-summary">
      <Image
        {...imageProps}
        src={post.frontmatter.imageUrl}
        alt={formatPostTitle(post.frontmatter.title)}
        mb={0}
      />
    </Link>
    <Box p={p ? 0 : 3}>
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
