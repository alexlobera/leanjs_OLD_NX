import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withWidth, { MEDIUM } from '../../utils/WithWidth'
import { RJSALogo } from '../../logos/RJSALogo'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import Grid from '../../layout/Grid'
import { blue1, Z_INDEX_SMALL, Z_INDEX_TOP } from '../../../config/styles'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: ${Z_INDEX_SMALL};
  background-color: ${blue1(0.75)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX_TOP};
`

export const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <Navbar>
      <Grid>
        <MenuContainer>
          <RJSALogo />
          {canIGuessTheScreenSizeUsingJS && width <= MEDIUM ? (
            <PhoneMenu />
          ) : (
            <DesktopMenu />
          )}
        </MenuContainer>
      </Grid>
    </Navbar>
  )
}

Menu.propTypes = {
  width: PropTypes.number,
}

export default withWidth()(Menu)
