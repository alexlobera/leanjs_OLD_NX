import React, { FunctionComponent } from 'react';

import { Container, Box, BoxProps, Flex } from '../layout';
import Link from '../navigation/Link';
import RGALogo from '../logos/RGALogo';

const Navbar: FunctionComponent<BoxProps> = ({ children, sx = {} }) => {
  return (
    <Box
      box="nav"
      sx={{ position: 'absolute', width: '100%', zIndex: 'sticky', ...sx }}
    >
      <Container sx={{ p: 4, bg: 'rgba(256,256,256, 0.9)' }}>
        <Flex>
          <Link
            className={`navigation-logo`}
            to="/"
            title="React GraphQL Academy Online"
          >
            <RGALogo />
          </Link>
          {children}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
