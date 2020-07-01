import React from 'react';
import styled from 'styled-components';

import { P, H3, H2a, H5a } from '../components/text';
import Header from '../components/layout/Header';
import { Ul, Li } from '../components/layout/Ul';
import { Col } from '../components/layout/Grid';
import Section from '../components/layout/Section';
import Link, { ScrollingLink } from '../components/navigation/Link';
import { WHITE, SPACING_LARGE } from '../config/styles';

const pageContentSections = [
  {
    heading: 'What information of mine is being collected?',
    name: 'what-info',
    content: (
      <P>
        Through our contact form, we will collect your name, phone number or
        email address and details about what type of LeanJS service you’re
        interested in.
      </P>
    ),
  },
  {
    heading: 'Who is collecting my information?',
    name: 'who-is-collecting',
    content: (
      <React.Fragment>
        <P>
          LeanJS is collecting the information mentioned in the previous
          section.
        </P>
        <P>
          For more information about LeanJS’s people, visit the{' '}
          <Link to="/team/">Team & Principles</Link> page.
        </P>
      </React.Fragment>
    ),
  },
  {
    heading: 'How are my details collected?',
    name: 'how-collected',
    content: (
      <P>
        As mentioned previously, your details will be collected through our
        contact form.
      </P>
    ),
  },
  {
    heading: 'Why is it being collected?',
    name: 'why-collected',
    content: (
      <React.Fragment>
        <P>
          In the first instance, we will use your information to supply you with
          digital design, development and/or training services.
        </P>
        <P>
          If you’ve opted into our newsletter, we may - from time to time -
          contact you with information regarding our activities and/or special
          offers. If you would like to unsubscribe, please email us as{' '}
          <Link to="mailto:hello@leanjs.com">hello@leanjs.com</Link>
        </P>
      </React.Fragment>
    ),
  },
  {
    heading: 'How is my information used?',
    name: 'how-used',
    content: (
      <React.Fragment>
        <P>
          Your information is used to supply you with a digital service such as
          design, development and/or training services.
        </P>
        <P>
          If you have opted into the LeanJS newsletter, you will recieve emails
          of a marketing nature that will future events/trainings/services that
          you may not have indicated to us that you are interested in but we
          feel will enrich your experience with us. If you would like to
          unsubscribe, please email us at{' '}
          <Link to="mailto:hello@leanjs.com">hello@leanjs.com</Link>.
        </P>
      </React.Fragment>
    ),
  },
  {
    heading: 'Who will my information be shared with?',
    name: 'who-shared-with',
    content: (
      <React.Fragment>
        <P>
          Your information security is very important to us so we will never
          share your personal details with third parties without your consent.
        </P>
        <P>The key parties we may share information with will be:</P>

        <H5a>Our sub-brands</H5a>
        <P>
          The LeanJS family of brands includes training companies such as{' '}
          <Link to="https://reactgraphql.academy/">React GraphQL Academy</Link>.
          As the parent company, LeanJS may share your name, email, and/or phone
          number with our sub-brands. As part of the LeanJS brand, these
          sub-brands will follow our over-arching privacy guidelines regarding
          sharing information with further third parties.
        </P>

        <H5a>Our hosting providers</H5a>
        <P>
          All our information is stored on servers owned by{' '}
          <Link to="https://about.google/">Google LLC</Link> and what you share
          with us will inevitably be stored on their property. Please find
          Google's Privacy Policy{' '}
          <Link to="https://cloud.google.com/security/privacy">here</Link>.
        </P>
      </React.Fragment>
    ),
  },
  {
    heading: 'How long are my details kept for?',
    name: 'how-long-details-kept',
    content: (
      <React.Fragment>
        <P>
          LeanJS promises that we will not keep your details on file for more
          than 10 years and we will be in contact then to ask whether you would
          like us to keep your information on file.
        </P>
      </React.Fragment>
    ),
  },
  {
    heading: 'How do I remove my details from your servers?',
    name: 'how-remove-details',
    content: (
      <React.Fragment>
        <P>
          LeanJS promises that we will not keep your details on file for more
          than 10 years and we will be in contact then to ask whether you would
          like us to keep your information on file.
        </P>
      </React.Fragment>
    ),
  },
  {
    heading: 'What are cookies and what do they do with my details?',
    name: 'what-are-cookies',
    content: (
      <React.Fragment>
        <P>
          In addition to personal information that you give us, there is
          anonymous data that is collected through ‘Cookies’. Cookies is a small
          text file that our site may place on your computer that helps us
          understand how people use LeanJS - this in turn helps us improve our
          service.{' '}
          <Link to="https://ico.org.uk/your-data-matters/online/cookies/">
            More information about cookies
          </Link>
          .
        </P>
        <P>
          The information that is collected from cookies can include (but not
          excluded to):
        </P>
        <Ul>
          <Li>Browser type</Li>
          <Li>Rough location (they can never determine exact locations)</Li>
          <Li>Which sites you’ve come from</Li>
          <Li>How you’ve travelled through the site</Li>
        </Ul>

        <P>
          You may refuse the use of these cookies by selecting the appropriate
          settings on your browser, but please be aware that doing so may affect
          the functionality of LeanJS.com.
        </P>

        <H5a>Google Analytics</H5a>
        <P>
          We use Google Analytics which employs cookies on LeanJS. These cookies
          transmits website data to Google Analytics servers in the United
          States of America. Google Analytics does not identify individual users
          to your IP addresses or any other data that Google holds. For more
          information, please check out{' '}
          <Link to="https://www.google.com/analytics/terms/">
            Google Analytics’ terms of use
          </Link>
          .
        </P>
      </React.Fragment>
    ),
  },
];

const PrivacyPolicyContents = styled.section`
  padding-top: ${SPACING_LARGE};
`;

const PrivacyPolicyPage = () => (
  <div>
    <Header
      titleLines={['Privacy policy']}
      supportingText={
        <Col md={7}>
          <P sx={{ color: WHITE }}>
            Here at LeanJS, we are committed to taking your privacy seriously
            and always aim to make sure that your personal information is kept
            safe. We aim to instill trust in everything that we do and give you
            the best quality experience with us.
          </P>
        </Col>
      }
    />
    <Section padded>
      <H2a>What's on this page:</H2a>

      <Ul unstyled>
        {pageContentSections.map((section, i) => (
          <Li key={`privacy-policy-index-${i}`}>
            <ScrollingLink to={`#${section.name}`}>
              {section.heading}
            </ScrollingLink>
          </Li>
        ))}
      </Ul>

      <PrivacyPolicyContents>
        {pageContentSections.map((section, i) => (
          <React.Fragment key={`privacy-policy-content-${i}`}>
            <Link name={`#${section.name}`} />
            <H3>{section.heading}</H3>
            {section.content}
          </React.Fragment>
        ))}
      </PrivacyPolicyContents>
    </Section>
  </div>
);

export default PrivacyPolicyPage;
