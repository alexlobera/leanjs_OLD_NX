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
  title: 'Code of Conduct | React GraphQL Academy',
  description: '',
  type: 'website',
};

export default function TermsOfService() {
  const title = 'Code of conduct';

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
        title="Code of conduct"
        subtitle="All students, coaches, sponsors and volunteers at our trainings are required to agree with the following code of conduct."
        bgColors={['#DF0098', '#267280', 'rgba(256,256,256, 0.9)']}
      />

      <Section variant="top">
        <Container>
          <Sheet>
            <H2>
              <Link to="#key-takeaways" name="key-takeaways" />
              Key takeways
            </H2>
            <Ul>
              <Li>
                Everyone is required to adhere to the code of conduct -{' '}
                <strong>everyone</strong>.
              </Li>
              <Li>
                React GraphQL Academy is a harassment-free zone - offline AND
                remote.
              </Li>
              <Li>
                If you don’t adhere, you’ll get thrown out without a refund.
              </Li>
              <Li>Basically, don’t be a dick.</Li>
            </Ul>

            <H2>Summary</H2>
            <P>
              Every person at our trainings will be required to agree with this
              code of conduct and organisers will enforce this code throughout
              any event run by React GraphQL Academy.
            </P>
            <P>
              All participants are expected to cooperate with us to help
              guarentee a safe environment for everybody.
            </P>
            <P>
              Our trainings are dedicated to providing a harassment-free
              training experience for all who attend, regardless of:
            </P>
            <Ul>
              <Li>gender</Li>
              <Li>gender identity and expression</Li>
              <Li>age</Li>
              <Li>sexual orientation</Li>
              <Li>disability</Li>
              <Li>physical appearance</Li>
              <Li>body size</Li>
              <Li>race</Li>
              <Li>ethnicity</Li>
              <Li>religion (or lack thereof)</Li>
              <Li>technology choices</Li>
            </Ul>
            <P>
              We will not accept any form of harassment of our participants.
              Sexual imagery and language is not appropriate at any of our
              events, including formal trainings, talks/meetups, workshops, or
              parties. This is also applicable through social media such as
              Twitter and other online outlouts.
            </P>
            <P>
              Participants to any React GraphQL Academy event that violate these
              rules may be sanctioned or expelled from the event without a
              refund at the discretion of the conference organisers.
            </P>
          </Sheet>
        </Container>
      </Section>
    </Layout>
  );
}
