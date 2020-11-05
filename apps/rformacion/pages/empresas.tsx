import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { PageSection } from '../components/layout/Section';
import { BLUE, YELLOW, GREEN } from '../config/theme';
import ContactSection from '../components/layout/ContactSection';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Empresas'}
        subtitle="Formaciones para empresas pim pam pum'"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />

      <ContactSection
        buttonVariant="primary"
        title={'Tipos de cursos'}
        text="Nuestros cursos para empresa estan basados para empresa estan basados para empresa estan basados para empresa estan basados "
        buttonText="Ver catalogo de curso"
      />

      <PageSection
        imageSrc={imageDemo.src}
        title={'Esto es el titulo de la seccion com img a la izquierda'}
        subtitle="Esto es un subtitulo"
        text="BBBBB ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
        ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
        sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
        asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
        fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs"
      />

      <PageSection
        title={'Esto es una seccion destacada'}
        variant="secondary"
        text="CCCCCCC ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
        ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
        sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
        asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
        fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs"
      />

      <PageSection
        imageSrc={imageDemo.src}
        title={'Esto es el titulo de la seccion com img a la derecha'}
        subtitle="Esto es un subtitulo"
        text="DDDDD ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
        ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
        sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
        asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
        fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs"
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
