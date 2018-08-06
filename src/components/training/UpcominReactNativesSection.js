import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2 } from '../text'
import { TrainingItem, TrainingList } from './'
import { LONDON } from '../../config/images'

const UpcominReactNativesSection = () => (
    <Section>
        <Grid>
            <H2>
                <Col md={10} mdOffset={1}>
                    Upcoming React Native Training
                </Col>
            </H2>
            <Row>
                <Col md={10} mdOffset={1}>
                    <TrainingList>
                        <TrainingItem
                            location="TBD"
                            startDate="Sept 17th, 2018"
                            name="React Native London"
                            path="/react-native-bootcamp-london"
                            imageSrc={LONDON}
                        />
                    </TrainingList>
                </Col>
            </Row>
        </Grid>
    </Section>
)

export default UpcominReactNativesSection
