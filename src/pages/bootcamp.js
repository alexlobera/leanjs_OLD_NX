import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H1, H2, H3 } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import AttendedBySection from '../components/training/AttendedBySection'
import Ul, { Li } from '../components/Layout/Ul'
import ContactForm from '../components/form/Contact'

const Bootcamp = () => (
    <div>
        <Section color="lightGrey">
            <Grid>
                <H1>
                    1-week React Redux GraphQL Bootcamp
                </H1>
                <H2>In 7 days, expert coaches and mentors will work alongside you to master the React ecosystem so you return to work as a React specialist</H2>
                <P>
                    <LinkButton to="/react-redux-graphql-bootcamp-london" children="Next bootcamp: 20th Aug, London" />
                </P>
            </Grid>
        </Section>
        <AttendedBySection videoUrl="https://www.youtube.com/embed/yGwmF4AT1Fg" />
        <Section color="lightGrey">
            <Grid>
                <H1>
                    Is this bootcamp right for me?
                </H1>
                <Row>
                    <Col xs={5}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={7}>
                        <Ul>
                            <Li>Master React very quickly, get up to speed in <strong>one week of intense hands-on training</strong>.</Li>
                            <Li>Perfect for <strong>professional developers</strong> who are familiar with good programming practices. This is NOT a learn-to-code bootcamp.</Li>
                            <Li>Learn how to <strong>build production ready</strong> React applications.</Li>
                            <Li>Discuss <strong>real-world projects</strong> to learn best practices for building scalable React applications.</Li>
                            <Li>Our team is expert practicioners working with React every single day - <strong>not just teaching</strong></Li>
                            <Li>Carefully designed curriculum and teaching material. Our <strong>team of coaches</strong> have been teaching and improving it since early 2016.</Li>
                        </Ul>
                    </Col>
                </Row>
                <P align="center">
                    <Link to="/">Next bootcamps</Link>
                </P>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <CurriculumBootcamp />
            </Grid>
        </Section>
        <Section color="lightGrey">
            <Grid>
                <H1>
                    Upcoming bootcamps
                </H1>
                <Row>
                    <Col xs={5}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={7}>
                        London, UK
                    <P>20-27, August 2018</P>
                        <LinkButton to="/bootcamp" children="London Bootcamp" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={7}>
                        Lisbon district, Portugal
                    <P>7-13, October 2018</P>
                        <LinkButton to="/bootcamp" children="Lisbon Bootcamp" />
                    </Col>
                </Row>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <ContactForm />
            </Grid>
        </Section>
    </div>
)

export default Bootcamp
