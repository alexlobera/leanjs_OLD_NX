import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../../components/layout/Header';
import SheetSection from '../../components/layout/SheetSection';
import { H3, P } from '../../components/display';
import { Box, Ul, Li } from '../../components/layout';
import ConvinceSection from '../../components/layout/ConvinceSection';
import CourseSection from '../../components/course/CourseSection';

function CourseDetail(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Curso gestion de la diversidad'}
        subtitle="Mejora bla bla bla bla bladsfla alskasfd "
        bgColors={['#265199', '#265199', 'transparent']}
        bgGradientOpacity={1}
      />

      <SheetSection top={true}>
        {/* <Box sx={{ gridColumn: ['1 / -1'] }}>
          <H3>Descripcion del curso</H3>
          <P>
            asdfasf asfasdfasdfasdfa sfasdf asdfa sdfasdfasdfa sfasdf asdfa
            sdfasdfasdfa sfasdf asdfa sdfasdfasdfa sfasdf asdfa sdfasdfasdfa
            sfasdf asdfa sdasdfasf asfasdfasdfasdfa sfasdf asdfa sdfasdfasdfa
            sfasdf asdfa sdfasdfasdfa sfasdf asdfa sdfasdfasdfa sfasdf asdfa
            sdfasdfasdfa sfasdf asdfa sdasdfasf asfasdfasdfasdfa sfasdf asdfa
            sdfasdfasdfa sfasdf asdfa sdfasdfasdfa sfasdf asdfa sdfasdfasdfa
            sfasdf asdfa sdfasdfasdfa sfasdf asdfa sd
          </P>
        </Box> */}
        <Box sx={{ gridColumn: ['1 / -1', '1/ 6'] }}>
          <H3>Contenido del curso</H3>
          <Ul>
            <Li>
              asdfasf asfasdfasdfasdfa sfasdf asdfa sdfasdfasdfa sfasdf asdfa
              sdfasdfasdfa sfasdf asdfa sdfasdfasdfa sfasdf asdfa sdfasdfasdfa
              sfasdf asdfa sd
            </Li>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
          </Ul>

          <H3>Para que</H3>
          <Ul>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
            <Li>asdfasf asfasdfasdfasdfa sfasdf asdfa sd</Li>
          </Ul>
        </Box>
        <Box sx={{ gridColumn: ['1 / -1', '7/ -1'] }}>
          <H3>Contacto y precio</H3>
          <Ul>
            <Li>Precio: EUR 90</Li>
            <Li>Contacto: mario@reinventaformacion.com</Li>
          </Ul>
        </Box>
      </SheetSection>

      <ConvinceSection
        testimonialImageSrc={imageDemo.src}
        testimonialQuote="Amazing course because  jalsdjflasjdflakjd fklaskajsdflj sfaskfalsfj asdf a "
        testimonialFullname="John Travolta"
        title="Para quien es este curso?"
        text={
          <>
            <P>
              Este curso es para gente interesada en bla bla. Los requisitos
              necesarios son:
            </P>
            <Ul>
              <Li>Experiencia con X y Z</Li>
              <Li>No se require experience en W</Li>
            </Ul>
          </>
        }
      />

      <CourseSection
        title="Cursos relacionados"
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

export default CourseDetail;
