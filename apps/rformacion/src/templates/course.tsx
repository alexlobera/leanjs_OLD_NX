import React from 'react';
import { graphql } from 'gatsby';

// import { Grid, Container, Section, Flex } from '../components/layout';
import {
  Form,
  Field,
  Input,
  Button,
  composeValidators,
  mustBeEmail,
  required,
} from '../components/form';
import { getBlockContent } from '../utils';
import { Header } from '../components/layout/Header';
import SheetSection from '../components/layout/SheetSection';
import { H3, P, Spinner } from '../components/display';
import { Box, Ul, Li } from '../components/layout';
import ConvinceSection from '../components/layout/ConvinceSection';
import CourseSection from '../components/course/CourseSection';
import { LinkButton } from '../components/navigation/Link';

function CourseDetail({ data }) {
  const { course } = data;
  const headerImage = course?.image?.asset?.localFile?.childImageSharp?.fixed;

  return (
    <>
      <Header
        bgFixedImage={headerImage}
        title={course.title}
        subtitle={course.subtitle}
        bgColors={['#265199', '#265199', 'transparent']}
        bgGradientOpacity={1}
      />

      <SheetSection top={true}>
        <Box sx={{ gridColumn: ['1 / -1', '1/ 6'] }}>
          <H3>Contenido del curso</H3>
          {getBlockContent(course._rawSyllabus)}
          <H3>Para que</H3>
          {getBlockContent(course._rawObjectives)}
        </Box>
        <Box sx={{ gridColumn: ['1 / -1', '7/ -1'] }}>
          <H3>Próxima convocatoria e inscripcion</H3>
          {course.dates ? (
            <>
              <Ul>
                {course.address && <Li>Dirección: {course.address}</Li>}
                <Li>Fecha: {course.dates}</Li>
                {course.address && <Li>Horario: {course.address}</Li>}
                {course.address && <Li>Precio: {course.price} €</Li>}
              </Ul>
              <P>
                Rellena el siguiente formulario con tus datos y te enviaremos
                los datos del curso y la informacion para hacer el pago.
              </P>
            </>
          ) : (
            <P>
              Este curso no tiene fecha programada aún. Deja tu nombre y correo
              electrónico y te contactaremos cuando se programen nuevas fechas.
            </P>
          )}

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
                    placeholder="Escribe tu nombre aquí"
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
          <LinkButton to="/empresas">Ver sección empresas</LinkButton>
        </Box>
      </SheetSection>

      <ConvinceSection
        testimonialFluidImage={
          course.convinceSection?.testimonial?.image?.asset?.localFile
            ?.childImageSharp?.fluid
        }
        testimonialQuote={course.convinceSection?.quote}
        testimonialFullname={course.convinceSection?.testimonial?.fullname}
        title={course.convinceSection?.title}
        text={getBlockContent(course.convinceSection?._rawText)}
      />

      <CourseSection
        title="Cursos relacionados"
        courses={course.relatedCourses}
      />
    </>
  );
}

export const query = graphql`
  query CourseTemplateQuery($id: String!) {
    course: sanityCourse(id: { eq: $id }) {
      title
      subtitle
      _rawSyllabus
      _rawObjectives
      description
      address
      dates
      timing
      price
      relatedCourses {
        title
        slug {
          current
        }
        description
        image {
          asset {
            localFile(width: 600) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      convinceSection {
        subtitle
        title
        quote
        _rawText
        testimonial {
          fullname
          image {
            asset {
              localFile(width: 600) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          youtubeId
        }
      }
      image {
        asset {
          localFile(width: 1200) {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

export default CourseDetail;
