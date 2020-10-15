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
import TestimonialSheet from '../components/course/TestimonialSheet';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Testimonios de nuestros alumnos'}
        subtitle="Nuestros alumnos nos dan un sobresaliente en bla bla bla"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />

      <TestimonialSheet
        top={true}
        date="Sept 23, 2020"
        fullname="Mery Popins"
        courseTitle="Titulo del curso"
      />
      <TestimonialSheet
        date="Sept 23, 2020"
        fullname="Mery Popins"
        courseTitle="Titulo del curso"
      />
      <TestimonialSheet
        date="Sept 23, 2020"
        fullname="Mery Popins"
        courseTitle="Titulo del curso"
      />

      <CourseSection
        title="Proximos cursos"
        courses={[1, 2, 3].map(() => ({
          imageSrc: imageDemo.src,
          title: 'course title',
          excerpt: 'lorem relk afjasfj alkslkfaf laskjdfa',
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
