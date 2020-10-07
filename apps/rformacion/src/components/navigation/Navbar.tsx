import React from 'react';

import { Container, Box, BoxProps, As, Flex } from '../layout';
import Link from '../navigation/Link';
import ReinventaLogo from '../logos/ReinvantaLogo';

interface NavbarProps {
  menu?: JSX.Element;
}

const Navbar = function <T extends As = 'button'>({
  menu,
  children,
  sx,
}: BoxProps<T, NavbarProps>) {
  return (
    <>
      <Box
        box="nav"
        sx={{
          width: '100%',
          ...sx,
        }}
      >
        <Container
          sx={{
            p: sx?.p || 4,
            bg: 'background',
          }}
        >
          <Flex>
            <Link
              className="navigation-logo"
              to="/"
              title="React GraphQL Academy Online"
            >
              <ReinventaLogo />
            </Link>
            {menu}
          </Flex>
        </Container>
        <Container>{children}</Container>
      </Box>
    </>
  );
};

export default Navbar;
