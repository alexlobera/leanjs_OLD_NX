import React, { useState } from 'react'
import { WHITE, DARK_BLUE_075, Z_INDEX_TOP } from '../../config/styles'
import { Link } from '../navigation'
import Button from '../buttons/Button'
import { getCookie, setCookie } from '../utils/store'
import { Box } from '@leanjs/academy-ui'
import Flex from './Flex'

const HIDE_ACCEPT_COOKIES = 'HIDE_ACCEPT_COOKIES'

// const StyledCookiesNotification = styled(Flex)``
const StyledCookiesNotification = ({ sx = {}, ...rest }) => (
  <Flex
    sx={{
      my: 0,
      mx: 'auto',
      lineHeight: 1,
      border: '1px dashed',
      borderColor: WHITE,
      px: 1,
      py: 1,
      maxWidth: '22rem',
      backgroundColor: DARK_BLUE_075,
      color: WHITE,
      fontSize: 0,
      ...sx,
    }}
    {...rest}
  />
)

// StyledCookiesNotification.defaultProps = {
//   sx: {
//     my: 0,
//     mx: 'auto',
//     lineHeight: 1,
//     border: '1px dashed',
//     borderColor: WHITE,
//     px: 1,
//     py: 1,
//     maxWidth: '22rem',
//     backgroundColor: DARK_BLUE_075,
//     color: WHITE,
//     fontSize: 0,
//   },
// }

// const CookiesNotificationWrapper = styled(Box)``
const CookiesNotificationWrapper = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: 1,
      zIndex: Z_INDEX_TOP,
      ...sx,
    }}
    {...rest}
  />
)

// CookiesNotificationWrapper.defaultProps = {
//   sx: {
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     width: 1,
//     zIndex: Z_INDEX_TOP,
//   },
// }

const AcceptCookies = () => {
  const [hideAcceptCookies, setHideAcceptCookies] = useState(
    !!getCookie(HIDE_ACCEPT_COOKIES)
  )

  const handleClick = () => {
    setCookie(HIDE_ACCEPT_COOKIES, true)
    setHideAcceptCookies(true)
  }

  return hideAcceptCookies ? null : (
    <CookiesNotificationWrapper>
      <StyledCookiesNotification>
        <Button
          sx={{
            fontSize: 0,
            p: 1,
            mr: 1,
          }}
          onClick={handleClick}
          variant="secondary"
        >
          Close
        </Button>
        <div>
          Using our site means you consent to our use of cookies. Find out more
          in our{' '}
          <Link sx={{ color: WHITE }} to="/privacy-policy">
            privacy policy
          </Link>
          .
        </div>
      </StyledCookiesNotification>
    </CookiesNotificationWrapper>
  )
}

export default React.memo(AcceptCookies)
