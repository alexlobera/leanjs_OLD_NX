import React, { useState } from 'react'
import styled from 'styled-components'
import { WHITE, DARK_BLUE_075, Z_INDEX_TOP } from '../../config/styles'
import { Link } from '../navigation'
import Button from '../buttons/Button'
import { getCookie, setCookie } from '../utils/store'
import Box from './Box'
import Flex from './Flex'

const HIDE_ACCEPT_COOKIES = 'HIDE_ACCEPT_COOKIES'

const StyledCookiesNotification = styled(Flex)``
StyledCookiesNotification.defaultProps = {
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
}

const CookiesNotificationWrapper = styled(Box)``
CookiesNotificationWrapper.defaultProps = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: 1,
  zIndex: Z_INDEX_TOP,
}

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
          fontSize={0}
          p={1}
          mr={1}
          variant="secondary"
          onClick={handleClick}
        >
          Close
        </Button>
        <div>
          Using our site means you consent to our use of cookies. Find out more
          in our{' '}
          <Link color={WHITE} to="/privacy-policy">
            privacy policy
          </Link>
          .
        </div>
      </StyledCookiesNotification>
    </CookiesNotificationWrapper>
  )
}

export default AcceptCookies
