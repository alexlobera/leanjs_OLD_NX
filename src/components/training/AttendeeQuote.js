import React from 'react'
import styled from 'styled-components'
import { Blockquote } from '../text'
import { Image, Video } from '../elements'
import { reactBlue, DARK_GREY, FONT_FAMILY } from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX } from '../utils'
import { LinkButton } from '../buttons'

const Card = styled.div`
  border: 3px solid;
  border-color: ${reactBlue()};
  padding: 1rem;
  display: flex;
  padding-top: ${props => (props.small ? '1rem' : null)};
  flex-direction: ${props => (props.small ? 'column-reverse' : null)};
  @media (max-width: ${SCREEN_SM_MAX}) {
    flex-direction: column-reverse;
  }
  a {
    margin-top: 1rem;
  }
`

const StyledBlockquote = styled(Blockquote)`
  flex-grow: 1;
  @media (min-width: ${SCREEN_SM_MIN}) {
    padding: 5px 10px;
  }
`

const Text = styled.div`
  ${FONT_FAMILY} margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-stretch: normal;
  line-height: 2.3;
  letter-spacing: 0.9px;
  color: ${DARK_GREY};
  text-shadow: 0px 0px 1px ${DARK_GREY};
`
const Profile = styled.div`
  padding: 5px;
`
const Picture = styled(Image)`
  @media (min-width: ${SCREEN_SM_MIN}) {
    max-width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-right: -3px;
    align-self: center;
  }
  @media (max-width: ${SCREEN_SM_MAX}) {
    margin: 20px auto 0 !important;
  }
`

const AttendeeQuote = ({
  quote,
  fullname,
  company,
  job,
  profilePicUrl,
  ctaButton,
  ctaUrl = '/#',
  videoUrl,
  ...rest
}) => (
  <Card {...rest}>
    <Text>
      {videoUrl && <Video youtubeId={videoUrl} />}

      <StyledBlockquote>
        {quote || 'This is a quote from a trainee.'}
      </StyledBlockquote>

      <Profile>
        <strong>
          {fullname || ''}, {job || ''} - {company || 'Freelance'}{' '}
        </strong>
      </Profile>
      {ctaButton && (
        <LinkButton to={ctaUrl}>{ctaButton || 'Click here'}</LinkButton>
      )}
    </Text>
    {profilePicUrl && <Picture src={profilePicUrl} alt={fullname} />}
  </Card>
)

export default AttendeeQuote
