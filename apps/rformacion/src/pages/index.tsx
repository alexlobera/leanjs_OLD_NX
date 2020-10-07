import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { Section, Container } from '../components/layout';
import { H2, P } from '../components/display';

function Index(props) {
  return (
    <>
      <Header
        bgFixedImage={props.data.coverImage.childImageSharp.fixed}
        title={'Title in the home page'}
      />
      <Section>
        <Container>
          <H2>
            Esto es un titulo sd fasdf
          </H2>
          <P>Lorem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs </P>
        </Container>
      </Section>

      <Section variant="secondary">
        <Container>
          <H2>
            Esto es un titulo sd fasdf
          </H2>
          <P>Lorem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs orem ipsum  sdfadf asd fasfs </P>
        </Container>
      </Section>

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
