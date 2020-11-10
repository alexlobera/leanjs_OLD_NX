import React from 'react';
import { Container, Grid } from '../layout';
import { Section } from '../layout/Section';
import { H2 } from '../display';
import PostCard from './PostCard';

interface Post {
  mainImage: any;
  title: string;
  excerpt: string;
  slug: { current: string };
}

interface Props {
  posts: Post[];
  title?: string;
  top?: boolean;
}

function getPostPath(slug) {
  return `/blog/${slug}`;
}

function PostSection({ top, posts, title = null }: Props) {
  return (
    <Section top={top}>
      <Container>
        <H2 sx={{ mt: 0 }}>{title}</H2>
        <Grid columns={{ minWidth: '300px' }}>
          {posts.map(({ mainImage, title, excerpt, slug }) => (
            <PostCard
              to={getPostPath(slug.current)}
              fluidImage={mainImage?.asset?.localFile?.childImageSharp?.fluid}
              title={title}
              excerpt={excerpt}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PostSection;
