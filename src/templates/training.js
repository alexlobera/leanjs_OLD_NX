import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayRedux'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link, Breadcrumb } from 'src/components/navigation'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import { ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP } from 'src/config/data'

export const title = '1-Day React Redux Workshop'
export const WORKSHOP_TRAINING_ID = '5cffb4e806051b7d3bcb0cee'
export const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP]
export { TargetAudienceList, Curriculum }
export const type = REACT_WORKSHOP
export const tech = 'React'
export const trainingType = 'Workshops'
export const trainingName = 'Redux'

const ReduxWorkshopLanding = ({ path, pageContext }) => (
  <Layout>
    {({ trainings }) => {
      const nextTraining = getNextTrainingByTrainingId({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
      })
      console.log('Children222', pageContext)
      return pageContext.A.c()
    }}
  </Layout>
)

export default ReduxWorkshopLanding
