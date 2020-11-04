import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { Ul, Li } from '../components/layout';
import { PageSection } from '../components/layout/Section';
import { P } from '../components/display';
import { BLUE, YELLOW, GREEN } from '../config/theme';
import { LinkButton } from '../components/navigation/Link';
import ConvinceSection from '../components/layout/ConvinceSection';
import CourseSection from '../components/course/CourseSection';
import PostSection from '../components/blog/PostSection';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Blog'}
        subtitle="Articulos sobre comunicacion y soft skills"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />
      <PostSection
        top={true}
        posts={[1, 2, 31, 1, 1, 1].map(() => ({
          to: '/blog/article-1',
          imageSrc: imageDemo.src,
          title: 'Post super cool',
          excerpt: 'post posrt relk afjasfj alkslkfaf laskjdfa',
        }))}
      />
    </>
  );
}

export const query = graphql`
  query {
    coverImage: file(
      absolutePath: { regex: "/welcome/" }
      extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
    ) {
      publicURL
      name
      childImageSharp {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Index;
