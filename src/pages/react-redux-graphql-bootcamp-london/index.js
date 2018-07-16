import React from 'react'
import Link from '../../components/navigation/Link'
import { LinkButton } from '../../components/buttons'
import Section from '../../components/layout/Section'
import Button from '../../components/buttons/Button'
import Grid, { Col, Row } from '../../components/layout/Grid'
import Hr from '../../components/layout/Hr'
import Card from '../../components/layout/Card'
import P from '../../components/layout/P'
import ImagePlaceholder from '../../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3, Badge } from '../../components/text'
import Input from '../../components/form/Input'
import Ul, { Li } from '../../components/Layout/Ul'
import AttendedBySection from './AttendedBySection'
import { CurriculumBootcamp } from '../../components/curriculum'
import AttendeeQuoteSection from './AttendeeQuoteSection'
import ContactForm from '../../components/form/Contact'

const BootcampLondon = () => (
    <div>
        <Section color="lightGrey">
            <Grid>
                <H1>
                    Master React, Redux, GraphQL in London in a week
                </H1>
                <H2>20-25 August, 2018</H2>
                <Ul inline>
                    <Li>
                        <Link>Pricing</Link>
                    </Li>
                    <Li>
                        <Link>Curriculum</Link>
                    </Li>
                    <Li>
                        <Link>Target audience</Link>
                    </Li>
                </Ul>
                <H3>
                    Take your dev career to the next level by mastering the React ecosystem - in only 7 days!
                </H3>
            </Grid>
        </Section>
        <AttendedBySection />
        <Section color="lightGrey">
            <Grid>
                <H2>Prices</H2>
                <P>
                    Please be aware that the tickets cover the cost of the training, it does not include the cost of the flights and accomodation.
                </P>
                <Card>
                    <P>
                        <strong>Early bird ticket</strong>
                        <Badge style={{ float: 'right' }}>Save 20%</Badge>
                    </P>
                    <P>
                        Early bird tickes available until 20th July 2018.
                    </P>
                    <H3>
                        &pound;1740
                        <Button style={{ float: 'right' }}>Buy now</Button>
                    </H3>
                </Card>
                <Card style={{ marginTop: '20px' }}>
                    <P>
                        <strong>Pay by Installments</strong>
                    </P>
                    <P>
                        Pay in 3 installments - the first one being 50% of the total cost and the others to follow over 6 months. Contact us and we can talk things through with you.
                    </P>
                    <H3>
                        &pound;2160
                        <Button style={{ float: 'right' }}>Contact us</Button>
                    </H3>
                </Card>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <H2>
                    Is this bootcamp right for me? Are you...
                </H2>
                <Row>
                    <Col xs={5}>
                        <ImagePlaceholder width="100%" />
                    </Col>
                    <Col xs={7}>
                        <Ul>
                            <Li>A developer with 1+ year of development under your belt?</Li>
                            <Li>Familiar with front-end technologies like JavaScript, CSS, and HTML?</Li>
                            <Li>Taking a step forward to become a React JS Specialist able to make critical decisions in the architecture of a React application.</Li>
                            <Li>Unhappy with online learning and it's lack of 1-on-1 mentoring?</Li>
                        </Ul>
                    </Col>
                </Row>
                <P>
                    If you've said 'yes' to these, our bootcamp could be for you!
                </P>
                <H3>
                    Not for beginner devs!
                </H3>
                <P>
                    This is not a lear-to-code bootcamp. If you want to learn to code, we recommend you to contact our London-based partner <a href="https://makers.tech/" target="_blanck">Makers</a>. PLUS you'll get a &pound;250 discount using our reference "ReactJS Academy".
                </P>
            </Grid>
        </Section>
        <AttendeeQuoteSection
            quote="After being a developer for 10 years and with the increasing amount of people coming into tech, I wanted to ensure I stayed ahead of the curve in my skills to take my career further. Simply put, ReactJS Academy gave me that?"
            fullname="Joe home"
            job="CTO"
            company="ASOS.com"
        />
        <Section>
            <Grid>
                <CurriculumBootcamp />
            </Grid>
        </Section>
        <Section color="lightGrey">
            <Grid>
                <ContactForm />
            </Grid>
        </Section>
    </div>
)

export default BootcampLondon
