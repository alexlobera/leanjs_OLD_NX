import React from 'react'
import styled from 'styled-components'

import withWidth, { MEDIUM } from '../../utils/WithWidth'
import RGALogo from '../../logos/RGALogo'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import Grid from '../../layout/Grid'
import {
  DARK_BLUE_075,
  Z_INDEX_SMALL,
  Z_INDEX_TOP,
} from '../../../config/styles'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  position: relative;
  z-index: ${Z_INDEX_SMALL};
  background-color: ${DARK_BLUE_075};
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
          <RGALogo />
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

export default withWidth()(React.memo(Menu))
