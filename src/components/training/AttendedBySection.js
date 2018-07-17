import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'
import AttendedBy from './AttendedBy'

const AttendedBySection = ({ videoUrl }) => (
  <Section>
    <AttendedBy />
    <Grid>
      <iframe
        style={{ marginTop: '30px', marginBottom: '30px', border: 0 }}
        width="100%"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Grid>
  </Section>
)

export default AttendedBySection
