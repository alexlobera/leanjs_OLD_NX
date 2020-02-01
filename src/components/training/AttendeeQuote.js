import React from 'react'
import { Blockquote, P } from '../text'
import { Video } from '../elements'
import Box from '../layout/Box'
import { LinkButton } from '../buttons'
import Card from '../elements/Card'
import { selectTypeColor } from '../utils'

const AttendeeQuote = ({
  type,
  quote,
  fullname,
  company,
  job,
  profilePicUrl,
  ctaButton,
  ctaUrl = '/#',
  youtubeId,
  youtubeTime,
  ...rest
}) => (
  <Card borderColor={selectTypeColor(type)} variant="info" {...rest}>
    {youtubeId && <Video mb={2} time={youtubeTime} youtubeId={youtubeId} />}
    <Box px={1}>
      <Blockquote>{quote || 'This is a quote from a trainee.'}</Blockquote>
      <P pt={2}>
        <strong>
          {fullname || ''}, {job || ''} - {company || 'Freelance'}{' '}
        </strong>
      </P>
    </Box>
    {ctaButton && (
      <LinkButton mt={2} to={ctaUrl}>
        {ctaButton || 'Click here'}
      </LinkButton>
    )}
  </Card>
)

export default AttendeeQuote
