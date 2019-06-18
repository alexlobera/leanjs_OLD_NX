import React from 'react'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { ONE_DAY_WORKSHOP, REACT_WORKSHOP } from '../../config/data'
import { H2Ref, H4 } from '../text'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumReactWorkshops = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/training/workshops`,
  showLinkToCurriculum = false,
  trainings,
}) => {
  const type = [ONE_DAY_WORKSHOP, REACT_WORKSHOP]
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    toggleNavigateTo,
    type,
    isOpen,
    trainings,
  }
  const firstHalf = (
    <React.Fragment>
      <H4>Workshops currently available:</H4>
      <Section
        {...commonProps}
        title="Styling in React and Design Systems"
        name="styling"
        subTitle="See how React can look gorgeous and encourage design consistency"
        showLinkToCurriculum
      />

      <Section
        {...commonProps}
        title="React Fundamentals & Modern JavaScript"
        name="fundamentals"
        subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
        showLinkToCurriculum
      />
      <Section
        {...commonProps}
        title="React Hooks & Suspense"
        name="hooksAndSuspense"
        subTitle="Learn 2 of the newest and most exciting features in React"
        showLinkToCurriculum
      />
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Performance & FP in React"
        name="perfAndFP"
        subTitle="Discover best practice for permonant React apps"
        showLinkToCurriculum
      />
      <Section
        {...commonProps}
        title="React with GraphQL client"
        name="reactGraphqlClient"
        subTitle="Consume GraphQL APIs in any React application"
        showLinkToCurriculum
      />
      <Section
        {...commonProps}
        title="Testing in React"
        name="testingReact"
        subTitle="Ensure consistent, reliable code across the React ecosystem"
        showLinkToCurriculum
      />
      <Section
        {...commonProps}
        title="React Native"
        name="react-native"
        subTitle="Build upon your React knowledge and create great apps"
        showLinkToCurriculum
      />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Design Systems & styling in React{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        trainings,
      })}
    </React.Fragment>
  )
}

export default CurriculumReactWorkshops
