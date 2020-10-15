import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { PageSection } from '../components/layout/Section';
import { BLUE, YELLOW, GREEN } from '../config/theme';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Sobre Reinvanta'}
        subtitle="La escuela de formacion que 'anadir aqui una frase cool sobre vosotros'"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />

      <PageSection
        title={'Esto es una seccion sin imagen'}
        text="AAAAAAAA ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
        ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
        sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
        asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
        fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs"
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
