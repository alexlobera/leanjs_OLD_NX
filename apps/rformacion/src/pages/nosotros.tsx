import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { Container, Grid, Box } from '../components/layout';
import { Section } from '../components/layout/Section';
import { H2, H3, P, Image } from '../components/display';
import { Card } from '../components/layout/Card';
import { BLUE, YELLOW, GREEN } from '../config/theme';
import { LinkButton } from '../components/navigation/Link';

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
      <Section>
        <Container>
          <H2 sx={{ mt: 0 }}>Esto es una seccion sin imagen</H2>
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
              <Card>
                <Image src={imageDemo.src} />
              </Card>
            </Box>
            <Box
              sx={{
                gridColumn: ['1/ -1', '7/ -1'],
              }}
            >
              <H2 sx={{ mt: 0 }}>
                Esto es uns seccion con imagen a la izquierda
              </H2>
              <H3>Esto es un subtitulo</H3>
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
          <H2 sx={{ mt: 0 }}>Esto es una seccion destacada</H2>
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
                gridColumn: ['1/ -1', '1/ 7'],
              }}
            >
              <H2 sx={{ mt: 0 }}>
                Esto es uns seccion con imagen a la derecha
              </H2>
              <H3>Esto es un subtitulo</H3>
              <P>
                Lorem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
                ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
                sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
                asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
                fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs{' '}
              </P>
            </Box>
            <Box
              sx={{
                gridColumn: ['1/ -1', '8/ -1'],
              }}
            >
              <Card>
                <Image src={imageDemo.src} />
              </Card>
            </Box>
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
