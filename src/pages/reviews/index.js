import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Image from '../../components/elements/Image'
import Video from '../../components/elements/Video'
import Layout from '../../components/layout'
import Box from '../../components/layout/Box'
import Section, { TopSection } from '../../components/layout/Section'
import { Col, Row } from '../../components/layout/Grid'
import { H2, H3, P } from '../../components/text'
import Ul, { Li } from '../../components/layout/Ul'
import { RootHeader as Header } from '../../components/layout/Header'
import Link from '../../components/navigation/Link'
import { Segment } from '../../components/elements'
import { BulletIcon, TwitterIcon, LinkedinIcon } from '../../components/icons'

const StyledStars = styled.div`
  unicode-bidi: bidi-override;
  direction: rtl;
  display: inline-block;
  margin-bottom: 1rem;
  padding-top: 3px;
  > span {
    font-size: 1.5rem;
    color: yellow;
    text-shadow: -1px 0 rgba(0, 0, 0, 0.5), 0 1px rgba(0, 0, 0, 0.5),
      1px 0 rgba(0, 0, 0, 0.5), 0 -1px rgba(0, 0, 0, 0.5);
    display: inline-block;
    position: relative;
    width: 1.1em;
  }
`

const Rating = () => (
  <StyledStars>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
  </StyledStars>
)

const Review = ({
  name,
  date,
  review,
  links = [],
  footer,
  highlight,
  lastIndex,
}) => (
  <Box pb={lastIndex ? 0 : 5}>
    <Row>
      <Col xs={6} md={6} mdOffset={1}>
        <H3 mb={1}>{name}</H3>
        <Ul variants={['unstyled', 'inline']} mb={3}>
          {links.map(({ to, icon }) => (
            <Li>
              <Link title={`${name} ${icon.title}`} to={to}>
                <BulletIcon social fill="#4a4a4a" icon={icon} />
              </Link>
            </Li>
          ))}
        </Ul>
      </Col>
      <Col xs={6} md={4} textAlign="right">
        <Rating /> <br />
        <strong>{date}</strong>
      </Col>

      <Col md={8} mdOffset={1}>
        {highlight && (
          <P>
            <strong>{highlight}</strong>
          </P>
        )}
        {review}
      </Col>
      <Col md={9} mdOffset={1} textAlign="center" mt={2} mb={4}>
        Source:{' '}
        <Link to="https://www.switchup.org/bootcamps/react-graphql-academy">
          SwitchUp
        </Link>
      </Col>
      {footer && (
        <Col md={8} mdOffset={1} mt={3} mb={4}>
          {footer}
        </Col>
      )}
    </Row>
  </Box>
)

const reviews = [
  {
    name: 'Georgina Hodgkinson',
    date: 'August 23, 2019',
    highlight:
      '“REACT 101 to REACT ADVANCED in 1 bootcamp - REACT GRAPHQL ACADEMY - London August 2019”',
    links: [
      {
        to: 'https://www.linkedin.com/in/georgina-hodgkinson-00a17314',
        icon: LinkedinIcon,
      },
      {
        to: 'https://twitter.com/gthodgkinson',
        icon: TwitterIcon,
      },
    ],
    review: (
      <>
        <P>Wow what an intense and valuable React Bootcamp.</P>
        <P>
          I had done a React greenfield project in summer 2018 as part of RGSoC.
          I was self taught and although we managed to finish the project a lot
          was done with as problem solving and pure grit and determination as
          opposed to any deep understanding of why. I kept hearing about
          "thinking in react" terms but really didn't grasp the enormity of what
          this meant. I do now and so much more. I am more confident and look
          forward to my next project using React.
        </P>
        <P>
          This bootcamp covers not just what to do and what is available in the
          library of React, but also the thinking and reasoning behind why
          certain decisions are made, which is invaluable as a software
          engineer.
        </P>
        <P>
          I loved the experience and examples that the passionate trainers Alex
          and Richard shared. They were real and not just made up easy classroom
          examples that you wouldn't expect in the real world. I really
          appreciated the discussions and justifications of using certain
          methods over using others.
        </P>
        <P>
          The trainers are really keen and want you to learn as much as you can
          in this bootcamp. They take it in turns covering the intense amount of
          material but by breaking it up with their different styles of training
          means that you are able to absorb so much more material.
        </P>
        <P>
          There is time for practising, experimenting in pairs and then
          discussing problems, misunderstandings and consolidating learning.
        </P>
        <P>
          The curriculum is well put together. They use slides that are clear,
          organised and build upon previous sessions in a logical and easy to
          understand pattern. This bootcamp covers a lot of information that is
          up to date so you are learning the cutting edge methods and they share
          their resources openly.
        </P>
        <P>
          As a qualified trainer it is rare that I find trainers that are both
          technical, hands on consultants and are able to explain their craft.
          Richard and Alex do this in a relax informal manner but have a genuine
          interest in solving problems and sharing their knowledge but also keep
          their hands on real life consultancy so to keep up to date with their
          skills.
        </P>
        <P>
          I would definitely recommend this bootcamp to anyone wanting to learn
          React. It is a solid foundation, with advanced elements that will give
          you the knowledge, skills and confidence to start on a React project.
        </P>
      </>
    ),
    footer: (
      <>
        <P>
          Check out the{' '}
          <Link to="/react/women-in-tech-georgina-story">
            interview with Georgina here
          </Link>
          , or watch her video
        </P>
        <Video youtubeId="lG50I6KmzsQ" />
      </>
    ),
  },
  {
    name: 'Daniel Marksteiner',
    date: 'Nov 04, 2019',
    highlight: '“A great, focused one week bootcamp introduction to React!”',
    links: [
      {
        to: 'https://www.linkedin.com/in/daniel-marksteiner-b21949195/',
        icon: LinkedinIcon,
      },
    ],
    review: (
      <>
        <P>
          I recently completed the one week React Redux bootcamp in London with
          Alex as our main tutor. I found the course to be an intense and very
          rewarding experience which will help set me up for a job in React
          development. We covered ES6 Javascript, functional programming, React
          basics, Redux, styling, advanced patterns and test driven development.
          The class size was small (around 7 people) which allowed lots of one
          to one tuition with Alex while completing exercises. There's also lots
          of opportunities to pair up with other developers on the course which
          I found especially helpful with students attending from a variety of
          development backgrounds.
        </P>
        <P>
          I would say that we all found some parts of the course easier or
          harder depending on our individual programming experience which made
          pairing up all the more valuable. Alex is a fantastic tutor who
          explains things clearly. He doesn't always just give you the answer
          straight away to problems encouraging you to learn more effectively in
          the exercises through solving issues yourself. He has great patience
          and often stayed behind late after class to help us complete tasks or
          answer any additional questions we had.
        </P>
        <P>
          My advice for anyone considering the course is that it's a very
          valuable experience and you'll get a lot more out of learning together
          in a real environment face-to-face with other developers. I would
          encourage anyone attending the course to brush up on the basics of
          ES6, functional programming and the core concepts of React. The team
          at the academy send plenty of handy links and exercises before you
          start and you'll get far more out of the course if you spend a short
          amount of time brushing up on your skills beforehand.
        </P>
        <P>
          Overall I would definitely recommend this course for anyone
          considering learning React!”
        </P>
      </>
    ),
  },
  {
    name: 'Sam F',
    date: 'Sept 11, 2019',
    highlight: '“Intense and information packed”',
    links: [
      {
        to: 'https://www.linkedin.com/in/sam-finch/',
        icon: LinkedinIcon,
      },
    ],
    review: (
      <>
        <P>
          I attended this course as a self taught programmer hoping to expand my
          knowledge and break into the job market. My only React knowledge
          before the course was the provided pre-course materials and online
          basics courses.
        </P>
        <P>
          I learned a huge amount on this course, and would recommend it to
          anyone (provided they already have a solid foundation in JS and Git)
          who is looking to start using React professionally. The course covers
          everything from the basics of React to advanced concepts like higher
          order components and creating reusable component libraries.
        </P>
        <P>
          I especially welcomed the opportunity to pair program with other
          students throughout the course, as this is something I had not done
          before in my previous self-study.
        </P>
        <P>
          As a relative novice in software development I cannot understate how
          far this course brought along my knowledge and ability to write
          professional code. As well as specifics, the course also does a great
          job of covering theory and principles behind React development, i.e.
          'How To Think in React'. For example, we covered ideas like
          declarative vs imperative programming, writing testable units, writing
          and code for developers rather than for users, and separation of
          concerns.
        </P>
        <P>
          Throughout the course we also considered different approaches to each
          problem, discussing the benefits of each. This was invaluable, as
          software development is an ever changing landscape and it is important
          to consider why we do things as we do them, rather than just blindly
          following trends.
        </P>
        <P>
          I came away from the course with as many questions as answers, but
          this is a positive thing, as it allowed me to consolidate my knowledge
          and continue learning in an informed way since finishing the course.
        </P>
        <P>Many thanks to Alex, Richard and the team!</P>
      </>
    ),
  },
]

const ReviewsPage = ({ data }) => (
  <Layout>
    <Header
      titleLines={['Reviews']}
      subtitle={
        <>
          <Rating /> 4.5+ average rating on SwitchUp
        </>
      }
      fullHeight={false}
      paddingBottom={170}
    />
    <TopSection>
      <Segment>
        <Row>
          <Col md={10} mdOffset={1}>
            <H2>Here’s what some of our past students say about us</H2>
          </Col>
        </Row>
        {reviews.map((props, index) => {
          const lastIndex = reviews.length - 1
          return <Review {...props} lastIndex={index === lastIndex} />
        })}
      </Segment>
    </TopSection>
    {data.badges && data.badges.nodes && (
      <Section>
        <Row>
          <Col sm={12} md={10} mdOffset={1}>
            <H2>Best coding bootcamp</H2>
            <Row>
              {data.badges.nodes.map(({ name, childImageSharp }) => (
                <Col md={4} textAlign="center" pb={4}>
                  <Image
                    title={name.replace(/^\w/, c => c.toUpperCase())}
                    fluid={childImageSharp.fluid}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Section>
    )}
  </Layout>
)

export const query = graphql`
  query {
    badges: allFile(
      filter: { relativePath: { regex: "/pages/reviews/.*.png/" } }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 300) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`

export default ReviewsPage
