import React from 'react';
import withWidth, { MEDIUM } from '../../layout/WithWidth';
import DesktopMenu from './DesktopMenu';
import PhoneMenu from './PhoneMenu';

export { DesktopMenu, PhoneMenu };

export const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined';

  return (
    // <Navbar>
    //   <Grid>
    //     <MenuContainer>
    //       <RGALogo />
          canIGuessTheScreenSizeUsingJS && width <= MEDIUM ? (
            <PhoneMenu />
          ) : (
            <DesktopMenu />
          )
    //     </MenuContainer>
    //   </Grid>
    // </Navbar>
  );
};

export default withWidth()(React.memo(Menu));
