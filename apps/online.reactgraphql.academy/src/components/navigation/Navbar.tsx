import React, { FunctionComponent } from 'react';

import { Container, Box, LeanComponent, Flex } from '../layout';
import Link from '../navigation/Link';
import RGALogo from '../logos/RGALogo';
// TODO show in teaching material indirection layer if we use this interface here because breadcrum is a prop rather than children (see below)
// import { BreadcrumbProps } from './Breadcrumb';

interface HeadeProps {
  // TODO include this BreadcrumbProps in some teaching material.  Rather than passing data and build the elements inside the Header, we pass the element and we type it. Abstraction Vs implementation, Composition vs Encapsulation
  // breadcrumb?: JSX.Element;
  menu?: JSX.Element;
}

const Navbar: LeanComponent<HeadeProps> = ({
  // breadcrumb,
  menu,
  children,
  sx = {},
}) => {
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
            p: sx.p || 4,
            bg: 'rgba(256,256,256, 0.9)',
            borderColor: 'rgba(0, 41, 56, 0.5)',
            borderStyle: 'solid',
            borderWidth: 0,
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
          }}
        >
          <Flex>
            <Link
              className={`navigation-logo`}
              to="/"
              title="React GraphQL Academy Online"
            >
              <RGALogo />
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
