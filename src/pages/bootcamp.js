import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Button from '../components/buttons/Button'
import Grid, { Col, Row } from '../components/layout/Grid'
import Hr from '../components/layout/Hr'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../components/text'
import Input from '../components/form/Input'
import { CurriculumSection } from '../components/curriculum'

const Bootcamp = () => (
    <div>
        <Section color="lightGrey">
            <Grid>
                <H1>
                    1-week React Redux GraphQL Bootcamp
                </H1>
                <H2>In 7 days, expert coaches and mentors will work alongside you to master the React ecosystem so you return to work as a React specialist</H2>
                <P>
                    <LinkButton to="/bootcamp" children="Next bootcamp: 20th Aug, London" />
                </P>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <H2>
                    Our training is attended by developers from
                </H2>
                <Row>
                    <Col xs={6}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={6}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={6}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={6}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                </Row>
            </Grid>
            <iframe style={{ marginTop: '30px', marginBottom: '30px', border: 0 }} width="100%" height="315" src="https://www.youtube.com/embed/yGwmF4AT1Fg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <Card width={256}>
                <Blockquote>
                    This is a quote from a trainee.
                </Blockquote>
                <Row>
                    <Col xs={5}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={5}>
                        <P>
                            <strong>Joe Bloggs</strong>
                        </P>
                        <P>
                            CTO
                        </P>
                        <P>
                            ASOS.com
                        </P>
                    </Col>
                </Row>
            </Card>
        </Section>
        <Section color="lightGrey">
            <Grid>
                <H1>
                    Is this bootcamp right for me? (should we say instead: "Target audience")
                </H1>
                <Row>
                    <Col xs={5}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={7}>
                        <ul>
                            <li>Master React very quickly, get up to speed in <strong>one week of intense hands-on training</strong>.</li>
                            <li>Perfect for <strong>professional developers</strong> who are familiar with good programming practices. This is NOT a learn-to-code bootcamp.</li>
                            <li>Learn how to <strong>build production ready</strong> React applications.</li>
                            <li>Discuss <strong>real-world projects</strong> to learn best practices for building scalable React applications.</li>
                            <li>Our team is expert practicioners working with React every single day - <strong>not just teaching</strong></li>
                            <li>Carefully designed curriculum and teaching material. Our <strong>team of coaches</strong> have been teaching and improving it since early 2016.</li>
                        </ul>
                    </Col>
                </Row>
                <P align="center">
                    <Link to="/">Next bootcamps</Link>
                </P>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <H1>
                    The most complete curriculum
                </H1>
                <CurriculumSection>
                    <H2>Day 1</H2>
                    <H3>ES6 & ESNEXT, React Fundamentals, React Router</H3>
                    <Link to="/">Click here for more detail</Link>
                </CurriculumSection>
                <CurriculumSection>
                    <H2>Day 2</H2>
                    <H3>Forms, Authentication, Styling in React</H3>
                    <Link to="/">Click here for more detail</Link>
                </CurriculumSection>
                <CurriculumSection>
                    <H2>Day 3</H2>
                    <H3>Redux, and Testing Principles</H3>
                    <Link to="/">Click here for more detail</Link>
                </CurriculumSection>
                <CurriculumSection>
                    <H2>Day 4</H2>
                    <H3>Functional Programming, Advanced Redux, GraphQL, and Performance Optimizations</H3>
                    <Link to="/">Click here for more detail</Link>
                </CurriculumSection>
                <CurriculumSection>
                    <H2>Day 5</H2>
                    <H3>Testing in React, Functional Programming, Advanced React Patterns, Server-side Rendering</H3>
                    <Link to="/">Click here for more detail</Link>
                </CurriculumSection>
                <CurriculumSection>
                    <H2>Day 6</H2>
                    <H3>Hackathon</H3>
                    <Link to="/">Click here for more detail</Link>
                </CurriculumSection>
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
                <H2>
                    More info and some pre-course learning resources
                </H2>
                <H3>
                    Enter your email below and we'll email you with our latest training and free learning resources. We are very serious about your privacy and the safety of your information. Not convinced? Check out our <Link to="/privacy-policy">privacy policy</Link>.
                </H3>
                <P>
                    <Input
                        placeholder='Email'
                    />
                </P><P>
                    <Button children="Submit email" />
                </P>
            </Grid>
        </Section>
    </div>
)

export default Bootcamp
