import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import Layout from '../components/layout/Layout';
import { Container, Section } from '../components/layout';
import Sheet from '../components/layout/Sheet';
import Header from '../components/layout/Header';
import { H2, P } from '../components/display';
import Link from '../components/navigation/Link';

const metas = {
  title: 'Online Courses Coming Soon | React GraphQL Academy',
  description: '',
  type: 'website',
};

export default function PaymentConfirmation({ data, location }) {
  const title = 'Coming soon';
  const coverImage = data.coverImage.nodes[0].childImageSharp.fixed.src;
  const { email, referrer } = location.state || {};

  return (
    <Layout
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        { text: title },
      ]}
    >
      <Helmet
        title={metas.title}
        meta={[
          {
            name: 'description',
            content: metas.description,
          },
        ]}
      >
        {createMetas(metas)}
      </Helmet>
      <Header
        title="Thanks, you’re now subscribed!"
        subtitle="We’ll be sending you only the most relevant news & next training updates. No spam ;)"
        bgColors={['#DF0098', '#267280', 'rgba(256,256,256, 0.9)']}
        bgImage={coverImage}
      />

      <Section variant="top">
        <Container>
          <Sheet>
            <H2>What happens now?</H2>
            <P>
              You don’t have to do a thing! You’re now part of the club, just
              keep an eye on your email inbox not to miss our next newsletter.
            </P>
            <P>
              If you've made a mistake and you don't want to recieve our emails
              (#sadface), just visit our{' '}
              <Link to="https://reactgraphql.academy/unsubscribe/">
                unsubscribe
              </Link>{' '}
              page.
            </P>
            <P>
              If you have any questions, please don’t hesitate in contacting us.
              You can email us:{' '}
              <Link to="mailto:hello@reactgraphql.academy">
                hello@reactgraphql.academy
              </Link>{' '}
              or you can shout us on <Link to="/community/">social media.</Link>
            </P>
          </Sheet>
        </Container>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    coverImage: allFile(
      filter: {
        absolutePath: { regex: "/welcome/" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        publicURL
        name
        childImageSharp {
          fixed(width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
