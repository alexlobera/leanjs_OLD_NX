import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'
import AttendedBy from './AttendedBy'
import Video from '../../components/elements/Video'

const AttendedBySection = ({ videoUrl }) => (
  <Section color="lightGrey">
    <AttendedBy />
    <Grid>
      <Video
        style={{ marginTop: '30px', marginBottom: '30px', border: 0 }}
        height="315"
        src={videoUrl}
      />
    </Grid>
  </Section>
)

export default AttendedBySection
