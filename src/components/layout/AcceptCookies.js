import React from 'react'
import styled from 'styled-components'
import {
  WHITE,
  TEXT_SIZE,
  blue1,
  FONT_FAMILY,
  Z_INDEX_TOP,
} from '../../config/styles'
import { Link } from '../navigation'
import { getCookie, setCookie } from '../utils/store'

const HIDE_ACCEPT_COOKIES = 'HIDE_ACCEPT_COOKIES'

const StyledCookiesNotification = styled.div`
  ${TEXT_SIZE({ sm: true })};
  margin: 0 auto;
  line-height: 1rem;
  border: 1px dashed white;
  display: flex;
  padding: 0.5rem;
  color: ${WHITE};
  max-width: 20rem;
  background-color: ${blue1(0.75)};
  ${FONT_FAMILY} a {
    color: ${WHITE};
    ${TEXT_SIZE({ sm: true })};
  }
  button {
    ${TEXT_SIZE({ lg: true })};
    margin: 0;
    padding: 10px;
    background: none;
    border: none;
    color: ${WHITE};
    cursor: pointer;
  }
`

const CookiesNotificationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX_TOP};
`

class AcceptCookies extends React.Component {
  state = {
    hideAcceptCookies: !!getCookie(HIDE_ACCEPT_COOKIES),
  }

  handleClick = () => {
    setCookie(HIDE_ACCEPT_COOKIES, true)
    this.setState({ hideAcceptCookies: true })
  }

  render() {
    const { hideAcceptCookies } = this.state
    const { handleClick } = this

    return hideAcceptCookies ? null : (
      <CookiesNotificationWrapper>
        <StyledCookiesNotification>
          <div>
            Using our site means you consent to our use of cookies. Find out
            more in our <Link to="/privacy-policy">privacy policy</Link>.
          </div>
          <button onClick={handleClick}>⨯</button>
        </StyledCookiesNotification>
      </CookiesNotificationWrapper>
    )
  }
}

export default AcceptCookies
