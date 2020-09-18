import React from 'react';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import Layout from '../components/layout/Layout';
import { Container, Section, Ul, Li } from '../components/layout';
import Sheet from '../components/layout/Sheet';
import Header from '../components/layout/Header';
import { H2, P } from '../components/display';
import Link from '../components/navigation/Link';

const metas = {
  title: 'Terms Of Service | React GraphQL Academy',
  description: '',
  type: 'website',
};

export default function TermsOfService() {
  const title = 'Terms of service';

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
        title="Terms of service"
        bgColors={['#DF0098', '#267280', 'rgba(256,256,256, 0.9)']}
      // bgImage={coverImage}
      />

      <Section variant="top">
        <Container>
          <Sheet>
            <H2>By accessing React GraphQL Academy Online, you agree to the following Terms and Conditions.</H2>
            <P>
              If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained on this website are protected by applicable copyright and trademark law .
            </P>
            <H2>Re-sale</H2>
            <P>
              Re-sale of the course is not permitted.
            </P>
            <H2>Cancelation and refund policy</H2>
            <P>
              We hope you’re going to love these courses, as we worked hard to create them. But in case you don’t like some parts of it, please tell us why pithing the first 7 days after your purchase and we will give you a full refund
            </P>
            <H2>Use license</H2>
            <P>
              Permission is granted to temporarily use of materials on React GraphQL Academy Online's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </P>
            <Ul>
              <Li>modify or copy the materials;</Li>
              <Li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</Li>
              <Li>remove any copyright or other proprietary notations from the materials; o</Li>
              <Li>transfer the materials or account to another person or 'mirror' the materials on any other server.</Li>
            </Ul>
            <P>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by React GraphQL Academy Online at any time
            </P>
            <H2>Limitations</H2>
            <P>
              In no event shall React GraphQL Academy Online be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if React GraphQL Academy Online has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </P>
            <H2>Links</H2>
            <P>
              React GraphQL Academy Online is not responsible for the contents of any linked site to this website. Use of any such linked website is at the user's own risk.
            </P>
            <H2>Company information</H2>
            <P>
              Registered in England and Wales No. 09797580
              <br />
              Registered VAT number: 256 5475 77
            </P>
          </Sheet>
        </Container>
      </Section>
    </Layout>
  );
}
