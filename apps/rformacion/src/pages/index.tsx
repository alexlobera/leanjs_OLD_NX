import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { Container, Grid, Box } from '../components/layout';
import { Section } from '../components/layout/Section';
import { H2, P, Image } from '../components/display';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header bgFixedImage={imageDemo} title={'Title in the home page'} />
      <Section>
        <Container>
          <H2 sx={{ mt: 0 }}>Esto es un titulo sd fasdf</H2>
          <P>
            Lorem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
            sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
            fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
            ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
            asd fasfs orem ipsum sdfadf asd fasfs{' '}
          </P>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid columns={12}>
            <Box
              sx={{
                gridColumn: ['1/ -1', '1/ 6'],
              }}
            >
              <Image src={imageDemo.src} />
            </Box>
            <Box
              sx={{
                gridColumn: ['1/ -1', '7/ -1'],
              }}
            >
              <H2 sx={{ mt: 0 }}>Esto es un titulo sd fasdf</H2>
              <P>
                Lorem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
                ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
                sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
                asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
                fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs{' '}
              </P>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section variant="secondary">
        <Container>
          <H2 sx={{ mt: 0 }}>Esto es un titulo sd fasdf</H2>
          <P>
            Lorem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
            sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
            fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
            ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
            asd fasfs orem ipsum sdfadf asd fasfs{' '}
          </P>
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
