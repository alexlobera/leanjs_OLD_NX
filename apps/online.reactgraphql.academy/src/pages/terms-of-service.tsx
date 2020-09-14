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
            <H2>Transferring your place</H2>
            <P>
              We’ll happily transfer your place to a lucky colleague if you need
              to. Please let us know as soon as possible – email{' '}
              <Link to="mailto:hello@reactgraphql.academy">
                hello@reactgraphql.academy
              </Link>
              .
            </P>
            <P>
              If for any reason you can’t attend at all, you’ll need to let us
              know no later than 15 days before the date of the event or
              workshop. Refunds will not be made after this date.
            </P>
            <H2>Payment terms & re-sale</H2>
            <P>
              All tickets must be paid for within 14 days of an order being
              placed or by the date of the event, whichever is sooner.
            </P>
            <P>Re-sale of tickets is not permitted.</P>
            <H2>Cancelation and refund policy</H2>
            <P>
              You need to let us know no later than 15 days before the date of
              the event or workshop that you want to cancel your ticket in order
              to get a full refund.
            </P>
            <P>
              We can cancel any event or workshop 15 days before the date of the
              event or workshop. We will notify you by email to the address that
              you have provided us during the registration process.
            </P>
            <P>
              In the event of a cancelation, we’ll refund you the value of your
              tickets minus the Stripe fees:
            </P>
            <Ul>
              <Li>European cards: 1.4% + 20p</Li>
              <Li>non-European cards: 2.9% + 20p</Li>
            </Ul>
            <H2>Photos & footage</H2>
            <P>
              We occasionally photograph our training workshops, and by
              registering you give us permission to use any images or footage
              taken of you on the day. We also reserve the right to reproduce
              quotes and feedback which will be fully credited.
            </P>
            <H2>Accessibility</H2>
            <P>
              We aim to choose venues that are fully accessible. If you have any
              accessibility requirements you think we should be aware of, please
              let us know at the point of registering so that we can ensure we
              meet your needs and have someone on hand to assist you if
              required.
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
