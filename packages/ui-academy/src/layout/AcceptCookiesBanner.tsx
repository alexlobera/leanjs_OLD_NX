import React from 'react';
import { Box, Button, Flex } from '@leanjs/ui-core';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const COOKIE_BANNER = 'rga-cookie-banner';

export function AcceptCookiesBanner() {
  const [hide, setHide] = React.useState(true);

  function accept(accepted) {
    cookies.set(COOKIE_BANNER, 'hide');
    cookies.set('gatsby-gdpr-google-tagmanager', accepted.toString());
    setHide(true);
  }

  React.useEffect(() => {
    if (cookies.get(COOKIE_BANNER) !== 'hide') {
      setHide(false);
    }
  });

  if (hide) return null;

  return (
    <Flex
      sx={{
        position: 'fixed',
        zIndex: 99999,
        bottom: 0,
        left: 0,
        width: '100%',
        p: 2,
        textAlign: 'center',
        backgroundColor: 'inverseBackground',
        justifyContent: 'center',
        flexDirection: ['column', 'column', 'row'],
      }}
    >
      <Flex sx={{ alignItems: 'center', color: 'inverseText' }}>
        This website uses cookies to collect data in order to create statistics
        to improve the quality of our website. You can accept or refuse our
        cookies by clicking on the following buttons
      </Flex>
      <Box sx={{ minWidth: '385px' }}>
        <Button
          sx={{ ml: 4, mr: 2 }}
          variant="primary"
          onClick={() => accept(true)}
        >
          Accept
        </Button>
        <Button onClick={() => accept(false)}>Reject</Button>
      </Box>
    </Flex>
  );
}
