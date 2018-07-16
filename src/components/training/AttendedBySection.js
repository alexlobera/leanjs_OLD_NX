import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'

const AttendedBySection = ({ videoUrl }) => (
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
        <iframe style={{ marginTop: '30px', marginBottom: '30px', border: 0 }} width="100%" height="315" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </Section>
)

export default AttendedBySection
