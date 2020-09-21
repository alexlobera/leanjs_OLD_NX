import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';
import { useClient } from '@leanjs/graphql-client';

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
  const { clearStore } = useClient();

  useEffect(() => {
    clearStore();
  }, []);

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
        title="Thanks!"
        subtitle="We can’t wait to help you on your developer journey."
        bgColors={['#DF0098', '#267280', 'rgba(256,256,256, 0.9)']}
        bgImage={coverImage}
      />

      <Section variant="top">
        <Container>
          <Sheet>
            <H2 sx={{ mt: 0 }}>What happens now?</H2>
            <P>
              Congratulations! Your email address {email} has now access to the{' '}
              {referrer ? <Link to={referrer}>course</Link> : 'course'}. You
              just need to{' '}
              <strong>log in using your email address {email}</strong>.
            </P>
            <P>
              You should shortly receive an order confirmation and receipt in
              your email {email}. Just check your inbox soon (be sure to check
              your spam folder if you can’t see it).
            </P>
            <P>
              If you have any questions, please don’t hesitate to contact us.
              You can email us:{' '}
              <Link to="mailto:hello@reactgraphql.academy">
                hello@reactgraphql.academy
              </Link>
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
