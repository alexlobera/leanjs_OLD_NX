import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../../components/layout/Header';
import { PageSection } from '../../components/layout/Section';
import { BLUE, YELLOW, GREEN } from '../../config/theme';
import CourseSection from '../../components/course/CourseSection';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Catalogo de cursos'}
        subtitle="Estamos especializados en communicacion y soft skills"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />

      <CourseSection
        top
        sx={{ mb: 4 }}
        courses={[1, 2, 3, 1, 1, 1, 1, 1, 1].map(() => ({
          imageSrc: imageDemo.src,
          title: 'course title',
          excerpt: 'lorem relk afjasfj alkslkfaf laskjdfa',
        }))}
      />

      <PageSection
        title={'No encuentras la formacion que buscas?'}
        text="Puedes contactarnos en mario@reinventaformacion.com si quieres preguntar sobre otras formaciones bla bla bla"
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
