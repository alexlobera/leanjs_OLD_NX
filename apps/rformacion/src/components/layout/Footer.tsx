import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import { navigate } from 'gatsby';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  LinkedinIcon,
} from '@leanjs/ui-icons';

import { DARK_GREY } from '../../config/theme';
import { Grid, Container, Box, Ul, Li, Section, Flex } from '.';
import { H3, P, Spinner } from '../display';
import Link from '../navigation/Link';
import {
  Form,
  Field,
  Input,
  Button,
  composeValidators,
  mustBeEmail,
  required,
} from '../form';
// import { triggerSubscribe } from '../../api';

const Footer = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          text: '#fff',
        },
        forms: {
          input: {
            color: DARK_GREY,
          },
          error: {
            color: DARK_GREY,
          },
        },
      }}
    >
      <Section
        sx={{
          bg: 'secondary',
          mb: 0,
          pb: 0,
        }}
        as="footer"
      >
        <Container sx={{ pt: 10, pb: 8 }}>
          <Grid columns={12}>
            <Box sx={{ gridColumn: ['1/ -1', '1 / 6'] }}>
              <H3 sx={{ mt: 0 }}>Únete a nuestra newsletter</H3>
              <Form
                onSubmit={async ({ email }: any) => {
                  // await triggerSubscribe({ email, form: 'footer' });

                  navigate('/thanks-for-signing-up');
                }}
              >
                {({ formSubmitted, submitting }) =>
                  formSubmitted ? null : (
                    <>
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
              <P sx={{ pt: 3 }}>
                No enviamos spam según nuestra{' '}
                <Link
                  className="footer-privacy-policy"
                  to="/politica-de-privacidad/"
                >
                  política de privacidad
                </Link>
                .
              </P>
              <P>
                Puedes{' '}
                <Link
                  to="https://reactgraphql.academy/unsubscribe/"
                  className="footer-unsubscribe"
                >
                  borrarte
                </Link>{' '}
                de la newsletter cuando quieras.
              </P>
              <P>
                Copyright &copy; {`${new Date().getFullYear()}`},
                ReinventaFormacion.
              </P>
            </Box>
            <Box sx={{ gridColumn: ['1/ -1', '7 / -1'] }}>
              <H3 sx={{ mt: 0 }}>Enlaces del sitio</H3>
              <Flex>
                <Ul variant="unstyled" sx={{ mt: 0, mb: 2, flex: 1 }}>
                  {[
                    {
                      to: '',
                      text: 'Formacion',
                    },
                    {
                      to: '',
                      text: 'Sobre nosotros',
                    },
                    {
                      to: '',
                      text: 'Testimonios',
                    },
                    {
                      to: '',
                      text: 'Contacto',
                    },
                  ].map(({ to, text }) => (
                    <Li key={to}>
                      <Link to={to} className="site'link">
                        {text}
                      </Link>
                    </Li>
                  ))}
                </Ul>
                <Ul variant="unstyled" sx={{ mt: 0, mb: 2, flex: 1 }}>
                  {[
                    {
                      to: '',
                      text: 'Terminos de uso',
                    },
                    {
                      to: '',
                      text: 'Politica de privacidad',
                    },
                    {
                      to: '',
                      text: 'Codigo de conducta',
                    },
                  ].map(({ to, text }) => (
                    <Li key={to}>
                      <Link to={to} className="site'link">
                        {text}
                      </Link>
                    </Li>
                  ))}
                </Ul>
              </Flex>

              <H3>Conecta con nosotros</H3>
              <Ul variants={['unstyled', 'inline']} sx={{ mt: 0, mb: 2 }}>
                {[
                  {
                    to: '',
                    title: 'React GraphQL Academy Twitter',
                    icon: TwitterIcon,
                  },
                  {
                    to: '',
                    title: '',
                    icon: InstagramIcon,
                  },
                  {
                    to: '',
                    title: 'React GraphQL Academy Facebook',
                    icon: FacebookIcon,
                  },
                  {
                    to: '',
                    title: 'React GraphQL Academy LinkedIn',
                    icon: LinkedinIcon,
                  },
                ].map(({ to, title, icon: Icon }) => (
                  <Li key={to}>
                    <Link title={title} to={to} className="footer-follow-us">
                      <Icon />
                    </Link>
                  </Li>
                ))}
              </Ul>
            </Box>
          </Grid>
        </Container>
      </Section>
    </ThemeProvider>
  );
};

export default Footer;
