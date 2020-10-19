import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import { Ul, Li } from '../components/layout';
import { PageSection } from '../components/layout/Section';
import { P } from '../components/display';
import { BLUE, YELLOW, GREEN } from '../config/theme';
import { LinkButton } from '../components/navigation/Link';
import ConvinceSection from '../components/layout/ConvinceSection';
import CourseSection from '../components/course/CourseSection';
import PostSection from '../components/blog/PostSection';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;

  return (
    <>
      <Header
        bgFixedImage={imageDemo}
        title={'Escribir aquí el porqué el usuario desea comprar aquí'}
        subtitle="Escribir aquí lo que vendemos sin que ocupe mas de dos lineas"
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
        callToAction={
          <LinkButton variant="primary" to="/cursos">
            Ver cursos
          </LinkButton>
        }
      />

      <CourseSection
        title="Cursos destacados"
        courses={[1, 2, 3].map(() => ({
          imageSrc: imageDemo.src,
          title: 'course title',
          excerpt: 'lorem relk afjasfj alkslkfaf laskjdfa',
          slug: '/cursos/gestion-de-la-diversidad',
          available: true,
        }))}
      />

      <PageSection
        title={'Esto es una seccion muy destacada'}
        variant="primary"
        text="AAAA ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
        ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
        sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf
        asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
        fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs"
      />

      <ConvinceSection
        testimonialImageSrc={imageDemo.src}
        testimonialQuote="Amazing course because  jalsdjflasjdflakjd fklaskajsdflj sfaskfalsfj asdf a "
        testimonialFullname="John Travolta"
        title="Why ReinventaFormacion is good for me?"
        text={
          <>
            <P>
              Lorem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
              ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum
              sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd
              fasfs orem ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs orem
              ipsum sdfadf asd fasfs orem ipsum sdfadf asd fasfs{' '}
            </P>
            <Ul>
              <Li>Motivo 1 bla bla bla</Li>
              <Li>Motivo 2 bla bla bla</Li>
              <Li>Motivo 3 bla bla bla</Li>
            </Ul>
          </>
        }
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

      <PostSection
        title="Ultimos Articulos"
        posts={[1, 2, 3].map(() => ({
          imageSrc: imageDemo.src,
          title: 'Post super cool',
          excerpt: 'post posrt relk afjasfj alkslkfaf laskjdfa',
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
