import React from 'react';
import withWidth, { MEDIUM } from 'react-width';
import styled from 'styled-components';

import { LinkedLeanJSLogo } from '../../logos/LeanJS';
import DesktopMenu from './DesktopMenu';
import PhoneMenu from './PhoneMenu';
import { WHITE, SPACING_STANDARD } from '../../../config/styles';
import { styleChildLinkColor } from '../Link';
import Grid from '../../layout/Grid';

export { DesktopMenu, PhoneMenu };

const MenuContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
`;

const Nav = styled.nav`
  background-color: #2b2b2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${SPACING_STANDARD};
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  ${styleChildLinkColor(WHITE)};
`;

const LogoWrapper = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
`;

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined';

  return (
    <MenuContainer>
      <Grid>
        <Nav>
          {canIGuessTheScreenSizeUsingJS && width <= MEDIUM ? (
            <React.Fragment>
              <LinkedLeanJSLogo marginTop="5px" />
              <PhoneMenu />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <LogoWrapper>
                <LinkedLeanJSLogo />
              </LogoWrapper>
              <DesktopMenu />
            </React.Fragment>
          )}
        </Nav>
      </Grid>
    </MenuContainer>
  );
};

export default withWidth()(Menu);
