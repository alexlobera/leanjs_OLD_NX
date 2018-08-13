import React from 'react'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Span } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumAdvancedReact } from '../components/curriculum'
import Header from '../components/layout/Header'
import {
    TrustedBySection,
    AttendeeQuote,
    UpcomingTrainingSection,
} from '../components/training'
import { Card } from '../components/elements'
import CallToActionRow from '../components/layout/CallToActionRow'
import { Image } from '../components/elements'
import { BOOTCAMP_RIGHT, OLU } from '../config/images'
import {
    NotBegginersIcon,
    RunFastIcon,
    TargetIcon,
    TickBadgeIcon,
    BulletIcon,
    PeopleNetWorkIcon,
} from '../components/icons'
import { Breadcrumb } from '../components/navigation'

const Boocamps = () => (
    <React.Fragment>
        <Breadcrumb
            path={[
                { to: '/', label: 'Home' },
                { to: '/advanced-react-redux-graphql-bootcamp', label: 'Advanced React' },
            ]}
        />
        <Header
            titleLines={['Advanced React, Redux,', 'GraphQL Bootcamp']}
            subtitle="For 3 days, expert coaches and mentors will work<br />alongside you to master the React ecosystem so<br />you return to work as a Senior React developer"
            bgImg="full-time"
        />
        <TopSection>
            <Grid>
                <CallToActionRow left>
                    <Col xs={12} smOffset={1}>
                        <LinkButton
                            cta
                            to="/advanced-react-redux-graphql-bootcamp-london"
                            children="Next advanced bootcamp: 23th August, London >>"
                        />
                    </Col>
                </CallToActionRow>
                <Card border="shadow">
                    <CurriculumAdvancedReact />
                </Card>
            </Grid>
        </TopSection>
        <Section>
            <Grid>
                <Row>
                    <Col md={5}>
                        <Image src={BOOTCAMP_RIGHT} width="100%" />
                    </Col>
                    <Col md={5} mdOffset={1}>
                        <H2>Is this advanced React bootcamp right for me?</H2>
                        <Ul unstyled>
                            <Li>
                                <BulletIcon icon={RunFastIcon} />
                                Extremely rapid, intense learning
              </Li>
                            <Li>
                                <BulletIcon icon={NotBegginersIcon} />
                                Ideal for <strong>React developers with 1+ year of profesional experience</strong>.
                                Not for React beginners!
              </Li>
                            <Li>
                                <BulletIcon icon={TickBadgeIcon} />
                                Small classes with mentoring from expert developers & coaches
              </Li>
                            <Li>
                                <BulletIcon icon={TargetIcon} />
                                Hands-on project-based training - most of the time you'll be
                                coding.
              </Li>
                            <Li>
                                <BulletIcon icon={PeopleNetWorkIcon} />
                                Join a growing network of alumni for advice, knowledge and
                                social fun!
              </Li>
                        </Ul>
                        <P>
                            <LinkButton cta to="/react-redux-graphql-bootcamp-london">
                                Next one: August 23th, London >>
                            </LinkButton>
                        </P>
                    </Col>
                </Row>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <Row>
                    <Col lg={10} lgOffset={1}>
                        <AttendeeQuote
                            quote="Small numbers of students means you’re guaranteed to get the attention you need.  We programmed in pairs, feeding off people sitting next to you who also have a lot of knowledge - something  you don’t get in a lot of training. It’s a really good environment to learn"
                            fullname="Olu Omoniyi"
                            job="React & React Native Developer"
                            company="S&P Global"
                            profilePicUrl={OLU}
                        />
                    </Col>
                </Row>
            </Grid>
        </Section>
        <TrustedBySection />
        <UpcomingTrainingSection />
    </React.Fragment>
)

export default Boocamps
