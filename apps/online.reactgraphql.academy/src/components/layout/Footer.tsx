import React from 'react';
import { Flex, Container, Box } from '.';
import Link from '../navigation/Link';

const Footer = () => (
  <footer>
    <Container>
      <Flex sx={{ py: 3 }}>
        <Link to="/privacy-policy">Privacy policy</Link>
        <Box sx={{ ml: 'auto' }}>
          Online React GraphQL Academy is part of © LeanJS{' '}
          {new Date().getFullYear()}
        </Box>
      </Flex>
    </Container>
  </footer>
);

export default Footer;
