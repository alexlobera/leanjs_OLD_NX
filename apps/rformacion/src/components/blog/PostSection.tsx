import React from 'react';
import { Container, Grid } from '../layout';
import { Section } from '../layout/Section';
import { H2 } from '../display';
import PostCard from './PostCard';

interface Post {
  imageSrc: string;
  title: string;
  excerpt: string;
  to: string;
}

interface Props {
  posts: Post[];
  title?: string;
  top?: boolean;
}

function PostSection({ top, posts, title = null }: Props) {
  return (
    <Section top={top}>
      <Container>
        <H2 sx={{ mt: 0 }}>{title}</H2>
        <Grid columns={{ minWidth: '300px' }}>
          {posts.map(({ imageSrc, title, excerpt, to }) => (
            <PostCard to={to} src={imageSrc} title={title} excerpt={excerpt} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PostSection;
