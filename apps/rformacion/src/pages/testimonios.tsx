import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { BLUE, YELLOW, GREEN } from '../config/theme';
import CourseSection from '../components/course/CourseSection';
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
        youtubeId="lG50I6KmzsQ"
        top={true}
        date="Sept 23, 2020"
        fullname="Mery Popins"
        courseTitle="Titulo del curso"
      />
      <TestimonialSheet
        imageSrc={imageDemo.src}
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
          slug: '/cursos/gestion-de-la-diversidad',
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
