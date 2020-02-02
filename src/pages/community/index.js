import React from 'react'
import { graphql } from 'gatsby'

import { LONDON_BOOTCAMP } from '../../../images/imageNames'
import Layout from '../../components/layout'
import { formatUTC } from '../../components/utils'
import Section, { TopSection } from '../../components/layout/Section'
import { Col, Row } from '../../components/layout/Grid'
import { H2, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Segment, Image } from '../../components/elements'
import { RootHeader as Header } from '../../components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
} from '../../components/training'
import selectUpcomingTrainings from '../../components/training/selectUpcomingTrainings'
import { LinkButton } from '../../components/buttons'
import { MEETUP } from '../../config/data'
import { CallToActionRow } from '../../components/layout/CallToActionRow'
import { Breadcrumb } from '../../components/navigation'
import { OurMeetupGroups } from './meetups'

const instagramPictures = [
  {
    pageUrl: 'https://www.instagram.com/p/BlKzTaDhgHi/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36817558_450106245453815_6112091121972674560_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bk75sNohLYj/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F35617654_170833687116966_1947517169063428096_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bk5YOLChqtU/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36086456_1480216008745939_24472745127444480_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bez93FGjzF_/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26865648_169528813824877_4406314323148800000_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BegfOKJhqlI/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864897_328580144320192_5121053768045035520_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BetL4W9jgH-/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864416_129494071196900_7973896072546222080_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BehzsERhFD-/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26297885_475227026212742_5117213139569475584_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm6aQgUBf5I/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39082080_461163161052325_8607426366004002816_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bn03JlsBzha/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F40837332_948936048642799_1172628414218297748_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm5oSYThgdh/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38906658_416479198875897_7532493989954453504_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm1fSwqhbs6/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39509245_240024560031837_3622283981887635456_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmzERnchwWI/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38910064_2053848154901051_8646084443217330176_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bmv2RtLh-ni/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39134109_227966924551660_991928276173717504_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmgFNYuAId9/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38254367_252576538717173_2313109170460557312_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmGyp4KhDPq/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F37866739_2091795601072327_8113206459233206272_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BejRn8khgOr/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864283_388884551554676_8478013482342547456_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BkvoOb4B_CT/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36160171_379799175876625_8073726428358639616_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BRYf6cZhEci/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F17125812_1272222992812942_3290496564270727168_n.jpg?alt=media',
  },
]

const TwitterWidgetsOnlyOnClientSide = () => {
  if (typeof window !== 'undefined') {
    // package react-twitter-embed does not work on SSR, therefore it breaks the Gatsby build
    const {
      TwitterTimelineEmbed,
      TwitterFollowButton,
    } = require('react-twitter-embed')

    return (
      <React.Fragment>
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactgqlacademy"
          options={{ height: 800 }}
        />
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
      </React.Fragment>
    )
  } else {
    return null
  }
}

const Community = ({ data, path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingMeetups = selectUpcomingTrainings({
        trainings,
        type: MEETUP,
      })
      const nextMeetup = selectNthTraining({ trainings: upcomingMeetups }) || {}
      const nextMeetupStartDate =
        nextMeetup &&
        formatUTC(nextMeetup.startDate, nextMeetup.utcOffset, 'D MMM')
      const mentorshipImgSrc = data.file.childImageSharp.fluid.src
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: path, label: 'Community' },
            ]}
          />
          <Header
            titleLines={['The React GraphQL', 'Academy community']}
            subtitle="We are not a group of people - but a movement!"
            links={[
              { text: 'Twitter ', to: '#twitter' },
              { text: 'Meetups', to: '#meetups' },
              { text: 'Instagram', to: '#instagram' },
              { text: 'Mentor community', to: '#mentor-community' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            training={nextMeetup}
          />
          <TopSection>
            <CallToActionRow>
              <Col sm={4} lgOffset={1}>
                <LinkButton
                  variant="primary"
                  to={nextMeetup && nextMeetup.toPath}
                  children={`Next Meetup: ${nextMeetupStartDate}, ${nextMeetup &&
                    nextMeetup.city}`}
                />
              </Col>
            </CallToActionRow>
            <Row>
              <Col md={6}>
                <Segment>
                  <Col md={8} mdOffset={2}>
                    <H2>
                      Meetups? Yes! <a name="meetups" />
                    </H2>
                    <P>
                      We run and help support meetups all over the world
                      covering both React and GraphQL.{' '}
                    </P>
                    <LinkButton
                      to="/community/meetups"
                      className="meetups-clicks"
                    >
                      See All MeetUps
                    </LinkButton>
                    <OurMeetupGroups />
                  </Col>
                </Segment>
                <Segment sx={{ mt: 5 }}>
                  <Col md={8} mdOffset={2}>
                    <H2>
                      Instagram - boom! <a name="instagram" />
                    </H2>
                    <p>
                      <Link to="https://www.instagram.com/reactgraphqlacademy/">
                        @reactgraphqlacademy
                      </Link>
                    </p>
                    <Row>
                      {instagramPictures.map(({ imageUrl, pageUrl }) => (
                        <Col xs={4} key={pageUrl}>
                          <Link to={pageUrl}>
                            <Image
                              src={imageUrl}
                              alt="React GraphQL Academy Instagram images. We were unable to bring the descriptive text from Instagram, apologies."
                            />
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Segment>
              </Col>
              <Col md={6}>
                <Segment>
                  <Col md={8} mdOffset={2}>
                    <H2>
                      Twitter? Sure.
                      <a name="twitter" />
                    </H2>
                    <TwitterWidgetsOnlyOnClientSide />
                  </Col>
                </Segment>
              </Col>
              <Col md={6} />
            </Row>
          </TopSection>
          <Section>
            <Row>
              <Col md={6}>
                <Image
                  src={mentorshipImgSrc}
                  alt="A group of React GraphQL Academy coaches and mentors, looking very happy indeed"
                />
              </Col>
              <Col md={5} mdOffset={1}>
                <H2>
                  Our mentor community <a name="mentor-community" />
                </H2>
                <P>
                  React GraphQL Academy is devoted to helping developers grow in
                  their professional career. Our dedication stands beyond making
                  them awesome React developers. We want them to make an impact
                  in the organizations and people they choose to work with.
                </P>
                <P>
                  Our experience tells us that the best way to master a skill is
                  by teaching it. We believe sharing knowledge also contributes
                  to creating collaborative workplaces & communities.
                </P>
                <P>
                  The React GraphQL Academy mentorship program enables those
                  experienced developers in our community to take a step farther
                  and become a mentor in our community events and workshops.
                  This way they can build the experience required to become not
                  only a great developer but also a great coach, speaker, and
                  team player.
                </P>
                <P>
                  <LinkButton
                    target="_self"
                    to="mailto:hello@reactgraphql.academy?subject=Become a coach"
                  >
                    Become a coach
                  </LinkButton>
                </P>
              </Col>
            </Row>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export const query = graphql`
  query mentorshipImg($imgMaxWidth: Int!) {
    file(absolutePath: { regex: "/mentorship/" }) {
      childImageSharp {
        fluid(maxWidth: $imgMaxWidth) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Community
