import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../../components/layout/Header';
import { PageSection } from '../../components/layout/Section';
import { P } from '../../components/display';
import { BLUE, YELLOW, GREEN } from '../../config/theme';
import CourseSection from '../../components/course/CourseSection';
import { LinkButton } from '../../components/navigation/Link';
import ContactSection from '../../components/layout/ContactSection';

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
          slug: '/cursos/gestion-de-la-diversidad',
        }))}
      />

      <ContactSection
        title={'No encuentras el curso que buscas?'}
        text=" Si estas interesado en un curso que no esta en nuestro catalogo,
        puedes contactarnos usando este formulario de contacto del pie de
        pagina y contarnos en que cursos estas interesados"
        buttonText="Contáctanos"
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
