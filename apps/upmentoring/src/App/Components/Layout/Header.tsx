import React, { ReactNode } from 'react';

import Flex from '../Layout/Flex';
import Heading from '../Text/Heading';

interface HeaderProps {
  title: ReactNode;
  subtitle: ReactNode;
  actions: ReactNode;
}
const Header = ({ title, subtitle, actions }: Partial<HeaderProps>) => (
  <Flex alignItems="center" flexDirection="row" mb={3}>
    <Flex flexDirection="column">
      <Heading variant="h1" mt={2}>
        {title}
      </Heading>
      {subtitle && (
        <Heading variant="h4" mt={3}>
          {subtitle}
        </Heading>
      )}
    </Flex>

    {actions && (
      <Flex ml="auto" mr={2}>
        {actions}
      </Flex>
    )}
  </Flex>
);

export default Header;
