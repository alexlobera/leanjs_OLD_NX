import React from 'react';
import { graphql } from 'gatsby';

// import { Grid, Container, Section, Flex } from '../../../components/layout';
import {
  Form,
  Field,
  Input,
  Button,
  composeValidators,
  mustBeEmail,
  required,
} from '../../../components/form';

import { Header } from '../../../components/layout/Header';
import SheetSection from '../../../components/layout/SheetSection';
import { H3, P, Spinner } from '../../../components/display';
import { Box, Ul, Li } from '../../../components/layout';
import ConvinceSection from '../../../components/layout/ConvinceSection';
import CourseSection from '../../../components/course/CourseSection';
import { LinkButton } from '../../../components/navigation/Link';

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
          <H3>Próxima convocatoria e inscripcion</H3>
          {/* <Ul>
            <Li>Dirección: online</Li>
            <Li>Fecha: 25 Enero 2021</Li>
            <Li>Horario: Viernes de 17h a 19h y sabado de 9h a 12h</Li>
            <Li>Precio: EUR 90</Li>
          </Ul>
          <P>
            Rellena el siguiente formulario con tus datos y te enviaremos los
            datos del curso y la informacion para hacer el pago.
          </P> */}

          <P>
            Este curso no tiene fecha programada aun. Deja tu nombre y correo
            electronico y te contactaremos cuando se programen nuevas fechas.
          </P>
          <Form
            onSubmit={async ({ email }: any) => {
              // await triggerSubscribe({ email, form: 'footer' });
              alert('TODO');
            }}
          >
            {({ formSubmitted, submitting }) =>
              formSubmitted ? null : (
                <>
                  <Field
                    component={Input}
                    validate={composeValidators(mustBeEmail, required)}
                    label="Nombre completo:"
                    name="name"
                    placeholder="Escribe tu nombre aqui "
                  />
                  <Field
                    component={Input}
                    validate={composeValidators(mustBeEmail, required)}
                    label="Tu correo electrónico:"
                    name="email"
                    placeholder="direccion@ejemplo.com"
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={submitting}
                    className="newsletter-submit-button"
                  >
                    {submitting ? <Spinner /> : 'Enviar'}
                  </Button>
                </>
              )
            }
          </Form>
          <H3>Empresas</H3>
          <P>¿Estás interesado en una formacion a medida para tu empresa?</P>
          <LinkButton to="/empresas">Ver seccion empresas</LinkButton>
        </Box>
      </SheetSection>

      <ConvinceSection
        testimonialImageSrc={imageDemo.src}
        testimonialQuote="Amazing course because  jalsdjflasjdflakjd fklaskajsdflj sfaskfalsfj asdf a "
        testimonialFullname="John Travolta"
        title="A quien va dirigido"
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
        title="Otros cursos"
        courses={[1, 2, 3].map(() => ({
          imageSrc: imageDemo.src,
          title: 'course title',
          excerpt: 'lorem relk afjasfj alkslkfaf laskjdfa',
          slug: '/cursos/gestion-de-la-diversidad',
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
