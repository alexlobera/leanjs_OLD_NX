import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  LinkedinIcon,
} from '@leanjs/ui-icons';

import { DARK_GREY } from '../../config/theme';
import { Grid, Container, Box, Ul, Li, Section } from '.';
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

const Footer = () => (
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
        bg: ['secondary', 'secondary', 'transparent'],
        mb: 0,
        pb: 0,
      }}
      as="footer"
    >
      <Container sx={{ pt: 9, pb: 7, bg: 'secondary' }}>
        <Grid columns={12}>
          <Box sx={{ gridColumn: ['1/ -1', '1/ -1', '2/ -2'] }}>
            <Grid columns={10}>
              <Box sx={{ gridColumn: ['1/ -1', '1 / 6'] }}>
                <H3>Free learning resources</H3>
                <Form
                  onSubmit={() => {
                    // TODO
                  }}
                >
                  {({ formSubmitted, submitting }) =>
                    formSubmitted ? null : (
                      <>
                        <Field
                          component={Input}
                          validate={composeValidators(mustBeEmail, required)}
                          label="Your email address:"
                          name="email"
                          placeholder="eg. steve@jobs.com"
                        />
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={submitting}
                          className="newsletter-submit-button"
                        >
                          {submitting ? <Spinner /> : 'Submit email'}
                        </Button>
                      </>
                    )
                  }
                </Form>
                <P sx={{ pt: 3 }}>
                  We won't spam you as per our{' '}
                  <Link
                    className="footer-privacy-policy"
                    to="https://reactgraphql.academy/privacy-policy/"
                  >
                    Privacy Policy
                  </Link>
                  .
                </P>
                <P>
                  Looking to{' '}
                  <Link
                    to="https://reactgraphql.academy/unsubscribe/"
                    className="footer-unsubscribe"
                  >
                    unsubscribe
                  </Link>
                </P>
              </Box>
              <Box sx={{ gridColumn: ['1/ -1', '7 / -1'] }}>
                <H3>Contact us</H3>
                <P>
                  {' '}
                  The best way to contact us is by emailing us at{' '}
                  <Link
                    to="mailto:hello@reactgraphql.academy?subject=Course%20Query&body=Hi%20RGA%20team!"
                    className="footer-contact-us-mailto"
                  >
                    hello@reactgraphql.academy
                  </Link>
                  .
                </P>
                <P>
                  Otherwise, you can contact us socially on{' '}
                  <Link
                    to="https://twitter.com/reactgqlacademy"
                    className="footer-contact-us-links"
                  >
                    Twitter
                  </Link>
                  ,{' '}
                  <Link
                    to="https://www.instagram.com/reactgraphqlacademy/"
                    className="footer-contact-us-links"
                  >
                    Instagram
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="https://www.facebook.com/reactgraphqlacademy/"
                    className="footer-contact-us-links"
                  >
                    Facebook
                  </Link>
                </P>
                <H3>Connect with us</H3>
                <Ul variants={['unstyled', 'inline']} sx={{ mt: 0, mb: 2 }}>
                  {[
                    {
                      to: 'https://twitter.com/reactgqlacademy',
                      title: 'React GraphQL Academy Twitter',
                      icon: TwitterIcon,
                    },
                    {
                      to: 'https://www.instagram.com/reactgraphqlacademy/',
                      title: 'React GraphQL Academy Instagram',
                      icon: InstagramIcon,
                    },
                    {
                      to: 'https://www.facebook.com/reactgraphqlacademy/',
                      title: 'React GraphQL Academy Facebook',
                      icon: FacebookIcon,
                    },
                    {
                      to: 'https://www.linkedin.com/company/17933576/',
                      title: 'React GraphQL Academy LinkedIn',
                      icon: LinkedinIcon,
                    },
                    {
                      to: 'https://www.github.com/reactgraphqlacademy/',
                      title: 'React GraphQL Academy GitHub',
                      icon: GitHubIcon,
                    },
                  ].map(({ to, title, icon: Icon }) => (
                    <Li key={to}>
                      <Link title={title} to={to} className="footer-follow-us">
                        <Icon />
                      </Link>
                    </Li>
                  ))}
                </Ul>
                <P>
                  Copyright &copy; {`2017 - ${new Date().getFullYear()}`}, React
                  GraphQL Academy Online is a{' '}
                  <Link className="footer-leanjs" to="https://leanjs.com">
                    LeanJS
                  </Link>{' '}
                  product
                </P>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Section>
  </ThemeProvider>
);

export default Footer;
