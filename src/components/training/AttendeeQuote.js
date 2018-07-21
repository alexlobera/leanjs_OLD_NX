import React from 'react'
import styled from 'styled-components'
import P from '../layout/P'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'
import { Image } from '../elements'
import { Col, Row } from '../layout/Grid'

const Card = styled.div`
  background-color: white;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 2px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 6px;
  }
`

const StyledBlockquote = styled(Blockquote)`
  @media (min-width: 768px) {
    padding: 5px 10px;
  }
`

const Attendee = styled.div`
  display: flex;
  margin-left: auto;
  position: relative;
`
const AttendeeInfo = styled.div`
  padding: 5px;
  @media (min-width: 768px) {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
const AttendeePicture = styled(Image)`
  @media (max-width: 768px) {
    max-width: 40%;
  }
  @media (min-width: 768px) {
    max-width: 250px;
  }
`

const AttendeeQuoteDesktop = ({ quote, fullname, company, job, ...props }) => (
  <Card {...props}>
    <StyledBlockquote>
      {quote || 'This is a quote from a trainee.'}
    </StyledBlockquote>
    <Attendee>
      <AttendeePicture src="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg" />
      <AttendeeInfo>
        <strong>{fullname || 'Joe Bloggs'}</strong>
        <br />
        {job || 'CTO'}
        <br />
        {company || 'ASOS.com'}
      </AttendeeInfo>
    </Attendee>
  </Card>
)

export default AttendeeQuoteDesktop
