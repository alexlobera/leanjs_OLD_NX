import React from 'react';
import styled from 'styled-components';
import StickyBox from 'react-sticky-box';

import Form, {
  required,
  composeValidators,
  mustBeEmail,
} from '../components/form/Form';
import CheckboxField from '../components/form/CheckboxField';
import InputField from '../components/form/InputField';
// import Link, { styleChildLinkColor, MailtoLink } from "../navigation/Link"
import Button from '../components/buttons/Button';
import { Strong } from '../components/text';
import Spinner from '../components/elements/Spinner';
import { sendMessage } from '../api';
import Menu from '../components/navigation/menu';
import Section from '../components/layout/Section';
import Ul, { Li } from '../components/layout/Ul';
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles';
import Grid, { Col, Row } from '../components/layout/Grid';
import Image from '../components/elements/Image';
import {
  H1,
  H2 as StyledH2,
  H3,
  H4,
  H3a,
  P,
  SupportingText,
} from '../components/text';
import Box from '../components/layout/Box';
import Flex from '../components/layout/Flex';
import Link from '../components/navigation/Link';

const H2 = styled(StyledH2)`
  margin-top: 50px;
`;

const GitHubIcon = (props) => {
  const { fill = '#FFF' } = props;
  return (
    <svg focusable="false" width={24} height={24} fill={fill} {...props}>
      <path d="M10.5 0C4.7 0 0 4.6 0 10.25c0 4.53 3 8.38 7.18 9.73.53.1.72-.22.72-.5l-.02-1.9c-2.92.62-3.53-1.21-3.53-1.21-.48-1.18-1.17-1.5-1.17-1.5-.95-.63.07-.62.07-.62 1.06.07 1.61 1.05 1.61 1.05.94 1.57 2.46 1.12 3.06.86.1-.67.36-1.12.66-1.37-2.33-.26-4.78-1.14-4.78-5.07 0-1.12.41-2.04 1.08-2.75-.1-.26-.47-1.3.1-2.72 0 0 .89-.27 2.9 1.05a10.22 10.22 0 0 1 5.25 0c2-1.32 2.88-1.05 2.88-1.05a3.6 3.6 0 0 1 .1 2.72 3.9 3.9 0 0 1 1.09 2.75c0 3.94-2.46 4.8-4.8 5.06.38.32.72.94.72 1.9l-.02 2.8c0 .28.2.6.72.5A10.28 10.28 0 0 0 21 10.25C21 4.6 16.3 0 10.5 0z" />
    </svg>
  );
};
GitHubIcon.title = 'GitHub';

const TwitterIcon = ({ fill = '#FFF', width = 24, height = 24, ...rest }) => (
  <svg focusable="false" width={width} height={height} fill={fill} {...rest}>
    <path d="M22.46 5.63c0-.21 0-.43-.02-.65 1-.71 1.87-1.6 2.56-2.61-.92.4-1.9.67-2.95.8a5.08 5.08 0 0 0 2.26-2.8c-1 .58-2.09 1-3.26 1.23a5.16 5.16 0 0 0-8.87 3.45c0 .4.04.78.13 1.15A14.64 14.64 0 0 1 1.74.92a4.98 4.98 0 0 0 1.59 6.74A5.15 5.15 0 0 1 1 7.03v.07a5.07 5.07 0 0 0 4.12 4.95 5.21 5.21 0 0 1-2.32.08 5.134 5.134 0 0 0 4.8 3.51 10.4 10.4 0 0 1-7.6 2.1A14.69 14.69 0 0 0 7.86 20c9.44 0 14.6-7.7 14.6-14.37z" />
  </svg>
);

TwitterIcon.title = 'Twitter';

function renderIcon(url = '') {
  let Icon;
  if (url.indexOf('twitter.com') > -1) {
    Icon = TwitterIcon;
  } else if (url.indexOf('github.com') > -1) {
    Icon = GitHubIcon;
  }

  return Icon ? <Icon fill={LIGHTGREY} /> : null;
}

const IndexPage = () => (
  <React.Fragment>
    <Menu />
    <Section dark sx={{ paddingTop: '150px' }}>
      <Grid>
        <Row>
          <Col md={7}>
            <H1>JavaScript Architecture For Business Optimization Webinar</H1>
            <SupportingText>July 14, 2020</SupportingText>
            <SupportingText>10:00 CEST</SupportingText>
            <SupportingText>This event is remote</SupportingText>
            <P>
              These are challenging times for tech leaders. The future is no
              more uncertain than the present. We have to build and/or customize
              products, company websites, CMSes, marketing tools, APIs, etc in a
              global environment that demands more speed and agility, with
              sometimes fewer resources.
            </P>
            <P sx={{ paddingBottom: 0 }}>
              Many of the products and tools that support businesses nowadays
              rely heavily on JavaScript. In this webinar, we'll be discussing
              different software, architectures, and processes to optimize the
              JavaScript of our organizations.
            </P>
            <H2>Who should attend this</H2>
            <Ul>
              <Li>CTOs</Li>
              <Li>Technical Directors</Li>
              <Li>Software Architects</Li>
              <Li>Tech Leads</Li>
              <Li>JavaScript Developers</Li>
            </Ul>
            <H2>This webinar is ideal for you if</H2>
            <Ul>
              <Li>
                You are looking for ways to reduce costs while keeping the
                high-quality of your Web-based products.
              </Li>
              <Li>
                Your company has fewer developers now and it can't afford
                reducing the velocity of the product team/s.
              </Li>
              <Li>
                You want to find an internal and cost-effective solution to
                launch new products faster.
              </Li>
              <Li>
                Your company had to lay off the CTO, CIO, Solution Architect or
                any tech decision-maker, and now it needs to make critical
                decisions about Web-based system architectures.
              </Li>
            </Ul>
            <H2>Meet our speaker</H2>
            <Flex sx={{ mr: 5, mb: 4, flexDirection: 'column' }}>
              <Flex>
                <Image
                  circle
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQFT2RQ6m75u9w/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=o7_Xkn6mFy9VzusPMZA9iPqY7I3Fi7rGSZlJWuxJAa4"
                  sx={{
                    display: 'flex',
                    width: ['85px'],
                    height: ['85px'],
                    minWidth: '85px',
                    mr: 2,
                    mb: 1,
                  }}
                  alt={`Alex Lobera`}
                />
                <Box sx={{ color: WHITE }}>
                  <H3 style={{ marginBottom: '15px' }}>Alex Lobera</H3>
                  <P sx={{ pb: 1 }}>
                    Founder at LeanJS and React GraphQL Academy
                  </P>
                  {[
                    'https://twitter.com/alex_lobera',
                    'https://github.com/alexlbr',
                  ].map((url) => (
                    <Link to={url} sx={{ marginRight: '20px' }}>
                      {renderIcon(url)}
                    </Link>
                  ))}
                </Box>
              </Flex>
            </Flex>
            <P>
              Experienced entrepreneur and tech decision-maker. Passionate about
              Lean, JavaScript, and modern Web-based architectures. Public
              speaker at international conferences such as JavaScript
              Conference, React Week New York, and React Day Berlin. 15 years of
              experience in the software industry. Open source developer.
              Interested in digital products that make a social impact.
            </P>
          </Col>
          <Col mdOffset={1} md={4}>
            <StickyBox offsetTop={120}>
              <Form onSubmit={sendMessage}>
                {({ submitting, submitSucceeded }) =>
                  submitSucceeded ? (
                    <Strong large color={WHITE}>
                      Thank you for your submission! We will be in touch
                      shortly.
                    </Strong>
                  ) : (
                    <React.Fragment>
                      <InputField
                        color={WHITE}
                        label="Full name (required)"
                        name="webinar-name"
                        placeholder="eg. Steve Jobs"
                        validate={required}
                      />
                      <InputField
                        color={WHITE}
                        label="Email (required)"
                        name="webinar-email"
                        placeholder="eg. name@company.com"
                        validate={composeValidators(mustBeEmail, required)}
                      />
                      <InputField
                        color={WHITE}
                        label="Company (required)"
                        name="webinar-company"
                        validate={required}
                      />
                      <InputField
                        color={WHITE}
                        label="Job title (required)"
                        name="webinar-job"
                        validate={required}
                      />
                      <CheckboxField
                        color={WHITE}
                        name="sign-up-newsletter"
                        label="Sign up to the LeanJS newsletter"
                      />
                      <P sx={{ color: WHITE }}>
                        We won't spam you as per our{' '}
                        <Link
                          className="footer-privacy-policy"
                          to="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </P>
                      <Button type="submit">
                        {submitting ? (
                          <Spinner color={DARKGREY} />
                        ) : (
                          'Sign up for the webinar'
                        )}
                      </Button>
                    </React.Fragment>
                  )
                }
              </Form>
            </StickyBox>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);

export default IndexPage;
