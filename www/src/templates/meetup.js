import React from 'react'
import Markdown from 'markdown-to-jsx'
import Helmet from 'react-helmet'

import { TopSection } from 'src/components/layout/Section'
import { Ul, Li } from 'src/components/layout/Ul'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H2Ref, H3, H4, H5, P, Span, Hr } from 'src/components/text'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { UpcomingTrainingSection } from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { MEETUP } from 'src/config/data'

const Meetup = ({ trainings, pageContext: { meetup = {}, locationImage } }) => {
  meetup.type = MEETUP
  const { city, title, description } = meetup
  const excerpt =
    description &&
    description.substr(0, description.lastIndexOf(' ', 120)) + '...'
  const defaultMetaText = 'Meetup by React GraphQL Academy'

  return (
    <>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: excerpt,
          },
        ]}
      >
        {/* TODO REPLACE THIS WITH createMetas function */}
        <meta property="og:title" content={title || defaultMetaText} />
        <meta property="og:description" content={excerpt || defaultMetaText} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@reactgqlacademy" />
        <meta name="twitter:title" content={title || defaultMetaText} />
        <meta name="twitter:description" content={excerpt || defaultMetaText} />
        <meta name="twitter:creator" content="@reactgqlacademy" />
      </Helmet>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: '/community', label: 'Community' },
          { to: '/community/meetups/', label: 'Meetups' },
          {
            to: `/community/meetups/${meetup.id}`,
            label: `${title}`,
          },
        ]}
      />
      <Header
        titleLines={[title || '...loading']}
        links={[
          { text: 'Meetup Details', to: '#details' },
          { text: 'Buy tickets', to: '#pricing' },
        ]}
        training={meetup}
        infoBoxFluidImage={locationImage}
        showInfoBox={true}
        type={MEETUP}
        className="meetup-details-clicks"
      />
      <TopSection variant="darkMob">
        <Segment variant="primary">
          <Row>
            <Col md={6} lg={4} lgOffset={1}>
              <H2Ref>
                Meetup details
                <Link to="#details" name="details">
                  #
                </Link>
              </H2Ref>
              <Markdown
                options={{
                  overrides: {
                    h2: H2,
                    h3: H3,
                    h4: H4,
                    h5: H5,
                    p: P,
                    a: Link,
                    ul: Ul,
                    li: Li,
                    span: Span,
                  },
                }}
              >
                {description || ''}
              </Markdown>
              <Hr />
              <Link
                to={`https://www.meetup.com/JavaScript-${city}/`}
                className="meetup-details-clicks"
              >
                JavaScript {city}
              </Link>
            </Col>
            <Col md={6} lg={5} lgOffset={1}>
              <PaymentSection item={meetup} />
            </Col>
          </Row>
        </Segment>
      </TopSection>
      <UpcomingTrainingSection trainings={trainings} />
    </>
  )
}

export default Meetup
