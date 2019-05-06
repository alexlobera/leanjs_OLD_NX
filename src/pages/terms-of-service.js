import React from 'react'

import Layout from '../components/layout'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Header from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Card } from '../components/elements'

const TermsOfService = () => (
  <Layout>
    <Header titleLines={['Terms of service']} />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>
                By registering for our workshops, courses or bootcamps, you
                agree to the following terms and conditions.
              </H2>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={10} mdOffset={1}>
            <Section>
              <H2>Transferring your place</H2>
              <P>
                We’ll happily transfer your place to a lucky colleague if you
                need to. Please let us know as soon as possible – email{' '}
                <Link to="mailto:hello@reactjs.academy">
                  hello@reactjs.academy
                </Link>
                .
              </P>
              <P>
                If for any reason you can’t attend at all, you’ll need to let us
                know no later than 15 days before the date of the event or
                workshop. Refunds will not be made after this date.
              </P>
            </Section>
            <Section>
              <H2>Payment terms & re-sale</H2>
              <P>
                All tickets must be paid for within 14 days of an order being
                placed or by the date of the event, whichever is sooner.
              </P>
              <P>Re-sale of tickets is not permitted.</P>
            </Section>
            <Section>
              <H2>Cancelation and refunds</H2>
              <P>
                You need to let us know no later than 15 days before the date of
                the event or workshop that you want to cancel your ticket in
                order to get a full refund.
              </P>
              <P>
                We can cancel any event or workshop 15 days before the date of
                the event or workshop. We will notify you by email to the
                address that you have provided us during the registration
                process.
              </P>
            </Section>
            <Section>
              <H2>Photos & footage</H2>
              <P>
                We occasionally photograph our training workshops, and by
                registering you give us permission to use any images or footage
                taken of you on the day. We also reserve the right to reproduce
                quotes and feedback which will be fully credited.
              </P>
            </Section>
            <Section>
              <H2>Accessibility</H2>
              <P>
                We aim to choose venues that are fully accessible. If you have
                any accessibility requirements you think we should be aware of,
                please let us know at the point of registering so that we can
                ensure we meet your needs and have someone on hand to assist you
                if required.
              </P>
            </Section>
            <Section>
              <H2>Company information</H2>
              <P>
                Registered in England and Wales No. 09797580
                <br />
                Registered VAT number: 256 5475 77
              </P>
            </Section>
          </Col>
        </Row>
      </Grid>
    </Section>
  </Layout>
)

export default TermsOfService
