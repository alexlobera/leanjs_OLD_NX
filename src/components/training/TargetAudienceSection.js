import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { Image } from '../elements'
import Ul, { Li } from '../layout/Ul'
import { Link } from '../navigation'
import { H3, H2Ref, P } from '../text'
import { HideComponentsUsingCss } from '../utils'
import { PART_TIME as PART_TIME_IMG } from '../../config/images'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../icons'

const TargetAudienceSection = () => (
  <Section>
    <Grid>
      <Row>
        <HideComponentsUsingCss xs sm>
          <Col md={6} lg={5}>
            <Image
              src={PART_TIME_IMG}
              width="100%"
              alt="React GraphQL Academy coach Alex assists a student, being next to them, inspecting their code and helping them on their learning path."
            />
          </Col>
        </HideComponentsUsingCss>
        <Col md={6} lg={5} lgOffset={1}>
          <H2Ref>
            Is this React part-time course right for me? Are you...{' '}
            <Link to="#target-audience" name="target-audience">
              #
            </Link>
          </H2Ref>
          <Ul unstyled>
            <Li>
              <BulletIcon icon={NotBegginerIcon} />A developer with ~1 year of
              development under your belt?
            </Li>
            <Li>
              <BulletIcon icon={CodeIcon} />
              Familiar with front-end technologies like JavaScript, CSS, and
              HTML?
            </Li>
            <Li>
              <BulletIcon icon={ReactIcon} />
              Taking a step forward to become a React JS specialist, able to
              make critical decisions in the architecture of a React
              application.
            </Li>
            <Li>
              <BulletIcon icon={CollabsIcon} />
              Not satisfied with online learning and it's lack of 1-on-1
              mentoring?
            </Li>
          </Ul>
          <P>
            If you've said 'yes' to these, our part-time course could be for
            you!
          </P>
          <H3>Not for beginner devs!</H3>
          <P>
            This is not a learn-to-code course. If you want to learn to code, we
            recommend checking out{' '}
            <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
              Free Code camps
            </Link>
            .
          </P>
          <Link to="/blog/the-perfect-react-bootcamp-student/">
            Blog: Are YOU the Perfect React Student?
          </Link>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default TargetAudienceSection
