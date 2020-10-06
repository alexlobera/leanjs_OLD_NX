import React from 'react';
import StickyBox from 'react-sticky-box';

import Link from 'src/components/navigation/Link';
import LinkButton from 'src/components/buttons/LinkButton';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import Box from 'src/components/layout/Box';
import Flex from 'src/components/layout/Flex';
import { H2, H3, H4, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import TwitterIcon from 'src/components/icons/TwitterIcon';
import GitHubIcon from 'src/components/icons/GitHubIcon';
import WebsiteIcon from 'src/components/icons/WebsiteIcon';
import BlogSection from 'src/components/blog/BlogSection';
import { PaymentSection } from 'src/components/payment';
import { Segment, Image } from 'src/components/elements';
import { MEETUP_RED, GREY } from 'src/config/styles';
import Card from 'src/components/elements/Card';
import RSVPForm from 'src/components/form/RSVPForm';

// const callForPapersLink =
//   'https://docs.google.com/forms/d/e/1FAIpQLScIvHytKvbO0VjtHeP8ljLg0c9J9IpfDBn8CEllgIgdxhh-cA/viewform'

const AgendaCard = ({ sx, ...rest }) => (
  <Card
    variant="primary"
    sx={{ mb: 5, borderColor: MEETUP_RED, ...sx }}
    {...rest}
  />
);

function renderIcon(url = '') {
  let Icon;
  if (url.indexOf('twitter.com') > -1) {
    Icon = TwitterIcon;
  } else if (url.indexOf('github.com') > -1) {
    Icon = GitHubIcon;
  } else {
    Icon = WebsiteIcon;
  }

  return Icon ? <Icon fill={GREY} /> : null;
}

const MeetupPage = ({
  posts,
  speakers = [],
  sponsors = [],
  agenda,
  event,
  callForPapersUrl,
}) => {
  return (
    <>
      <TopSection>
        <Segment>
          <Row>
            <Col md={6} mdOffset={1}>
              <H2>
                <a name="speakers" />
                Speakers
              </H2>
              {speakers.map(
                ({
                  fullName,
                  jobTitle,
                  companyName,
                  bio,
                  links,
                  profilePicUrl,
                }) => (
                  <Flex sx={{ mr: 5, mb: 5, pb: 5, flexDirection: 'column' }}>
                    <Flex>
                      <Image
                        src={profilePicUrl}
                        sx={{
                          borderRadius: '50%',
                          display: 'flex',
                          width: ['80px', '120px'],
                          height: ['80px', '120px'],
                          minWidth: '80px',
                          mr: 2,
                          mb: 1,
                        }}
                        alt={`${fullName} ${jobTitle} at ${companyName}`}
                      />
                      <Box>
                        <H4 sx={{ mb: 1 }}>{fullName}</H4>
                        <P sx={{ pb: 1 }}>
                          <strong>{`${jobTitle} at ${companyName}`}</strong>
                        </P>
                        {links && (
                          <Ul variants={['inline', 'unstyled']}>
                            {links.map(({ url }) => (
                              <Li>
                                <Link sx={{ mr: 2 }} to={url}>
                                  {renderIcon(url)}
                                </Link>
                              </Li>
                            ))}
                          </Ul>
                        )}
                      </Box>
                    </Flex>
                    <P sx={{ fontSize: 1 }}>{bio}</P>
                  </Flex>
                )
              )}
              {callForPapersUrl && (
                <React.Fragment>
                  <H3>
                    <a name="speakers" />
                    Call For Papers
                  </H3>
                  <LinkButton sx={{ mb: [6, 0] }} to={callForPapersUrl}>
                    Submit your talk
                  </LinkButton>
                </React.Fragment>
              )}
            </Col>
            <Col md={4}>
              <H3 sx={{ mb: 6, pt: 2 }}>Sponsors</H3>
              <StickyBox offsetTop={120}>
                {sponsors.map(
                  ({ imageUrl, url, borderColor = MEETUP_RED }, index) => {
                    const img = (
                      <Image sx={{ maxWidth: '65%' }} src={imageUrl} />
                    );

                    return (
                      <Card
                        variant="primary"
                        sx={{ borderColor, mt: index > 0 ? 6 : 0 }}
                      >
                        {url ? <Link to={url}>{img}</Link> : img}
                      </Card>
                    );
                  }
                )}
              </StickyBox>
            </Col>
          </Row>
        </Segment>
      </TopSection>

      {agenda && (
        <Section>
          <Row>
            <Col md={5} mdOffset={4}>
              <H2>
                <a name="agenda" />
                Agenda
              </H2>
              {agenda.map(({ title, sessions }) => (
                <React.Fragment>
                  <H3>{title}</H3>
                  {sessions && sessions.length && (
                    <AgendaCard>
                      {sessions.map(({ title: sectionTitle, description }) => (
                        <React.Fragment>
                          <H4>{sectionTitle}</H4>
                          <P>{description}</P>
                        </React.Fragment>
                      ))}
                    </AgendaCard>
                  )}
                </React.Fragment>
              ))}
            </Col>
          </Row>
        </Section>
      )}
      <Section variant="dark">
        <Row>
          {event.standardPrice === 0 ? (
            <Col md={6} lg={5} lgOffset={1}>
              <H2>
                <a to="#pricing" name="pricing" />
                Get your free ticket
              </H2>
              <RSVPForm />
            </Col>
          ) : (
            <React.Fragment>
              <Col md={6} lg={5} lgOffset={1}>
                <PaymentSection item={event} />
              </Col>
              <Col md={6} lg={4} lgOffset={1}>
                <StickyBox offsetBottom={15} offsetTop={120}>
                  <H2>Nominal Fee</H2>
                  <P>
                    <strong>Why do we charge a nominal fee?</strong>
                  </P>
                  <P>
                    We charge a nominal fee for community events in order to
                    confirm attendance to ensure we have an accurate RSVP list.
                    Our meetups are always over-subscribed so when people don't
                    show it stops somone else attending.
                  </P>
                  <P>
                    <strong>What do we do with the fee?</strong>
                  </P>
                  <P>
                    By paying for the nominal fee you're supporting minorities
                    in tech. You can read more about it in this{' '}
                    <Link to="/blog/join-our-meetups-and-support-minorities-in-tech#why_we_charge_a_nominal_fee">
                      link
                    </Link>
                    .
                  </P>
                  <P>The payment confirmation email is your ticket.</P>
                </StickyBox>
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Section>
      <BlogSection title="From our blog" posts={posts} />
    </>
  );
};

export default MeetupPage;
