import React from 'react'
import withWidth, { MEDIUM } from 'react-width'

import { RJALogo } from '../../logos'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import Grid from '../../layout/Grid'
import styled from '../../../../node_modules/styled-components'
import { blue1 } from '../../../styles'

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
`

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <Grid>
      <MenuContainer>
        <RJALogo position="menu" />
        {canIGuessTheScreenSizeUsingJS && width < MEDIUM ? (
          <PhoneMenu />
        ) : (
          <DesktopMenu />
        )}
      </MenuContainer>
    </Grid>
  )
}

export default withWidth()(Menu)
