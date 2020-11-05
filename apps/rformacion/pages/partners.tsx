import React from 'react';
import { graphql } from 'gatsby';

import { Container, Grid } from '../components/layout';
import { Section } from '../components/layout/Section';
// import { H2 } from '../components/display';
import { Header } from '../components/layout/Header';
import { BLUE, YELLOW, GREEN } from '../config/theme';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title="Partners"
        subtitle="Escribir aquí subtitulo"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />
      <Section>
        <Container>
          <Grid columns={{ minWidth: '300px' }}>
            {/* {partners.map((partner) => (
           <Image fluid={getFuildLogo(logo)} alt={name} sx={{ mb: 0 }} /> 
          ))} */}
          </Grid>
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
