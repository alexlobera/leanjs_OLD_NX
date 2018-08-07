import React from 'react'
import withWidth, { MEDIUM } from 'react-width'
import styled from 'styled-components'

import { RJSALogo } from '../../logos'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import Grid from '../../layout/Grid'
import { blue1 } from '../../../config/styles'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: 1;
  background-color: ${blue1(0.75)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navbar = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9992;
`

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <Navbar>
      <Grid>
        <MenuContainer>
          <RJSALogo />
          {canIGuessTheScreenSizeUsingJS && width < MEDIUM ? (
            <PhoneMenu />
          ) : (
            <DesktopMenu />
          )}
        </MenuContainer>
      </Grid>
    </Navbar>
  )
}

export default withWidth()(Menu)
