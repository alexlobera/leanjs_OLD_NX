import React from 'react';
import { Container, Grid } from '../layout';
import { Section } from '../layout/Section';
import { H2 } from '../display';
import PostCard from './PostCard';

interface Post {
  imageSrc: string;
  title: string;
  excerpt: string;
}

interface Props {
  posts: Post[];
  title?: string;
}

function PostSection({ posts, title = 'Articulos' }: Props) {
  return (
    <Section>
      <Container>
        <H2 sx={{ mt: 0 }}>{title}</H2>
        <Grid columns={{ minWidth: '300px' }}>
          {posts.map(({ imageSrc, title, excerpt }) => (
            <PostCard src={imageSrc} title={title} excerpt={excerpt} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PostSection;
