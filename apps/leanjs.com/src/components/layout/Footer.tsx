import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Ul, Li } from './Ul';
import Flex from './Flex';
import Grid from './Grid';
import Box from './Box';
import { SCREEN_LG_MIN } from '../utils';
import Link from '../navigation/Link';

const CurrentYear: FunctionComponent = () => (
  <span>{new Date().getFullYear()}</span>
);

const Footer = () => (
  <Box as="footer">
    <Grid>
      <Flex>
        <Ul variant="inline">
          <Li>
            <Link to="/privacy-policy">Privacy policy</Link>
          </Li>
        </Ul>
        <Ul variant="inline" sx={{ ml: 'auto' }}>
          <Li>
            © Techdency Limited T/A LeanJS <CurrentYear />
          </Li>
        </Ul>
      </Flex>
    </Grid>
  </Box>
);

export default Footer;
