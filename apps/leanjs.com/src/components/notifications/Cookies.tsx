import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { WHITE, EXTRADARKGREY } from '../../config/styles';
import Link from '../navigation/Link';
import Button from '../buttons/Button';
//import { getCookie, setCookie } from '/utils/store';
import Box from '../layout/Box';
import Flex from '../layout/Flex';

const HIDE_ACCEPT_COOKIES = 'HIDE_ACCEPT_COOKIES';

const StyledCookiesNotification = ({ sx = {}, ...rest }) => (
  <Flex
    sx={{
      my: 0,
      mx: 'auto',
      lineHeight: 1,
      border: '1px dashed',
      borderColor: WHITE,
      px: 1,
      py: 1,
      maxWidth: '22rem',
      backgroundColor: EXTRADARKGREY,
      color: WHITE,
      fontSize: 0,
      ...sx,
    }}
    {...rest}
  />
);

const CookiesNotificationWrapper = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      ...sx,
    }}
    {...rest}
  />
);

const AcceptCookies = () => {
  const [hideAcceptCookies, setHideAcceptCookies] = useState(
    !!Cookies.get(HIDE_ACCEPT_COOKIES)
  );

  const handleClick = () => {
    // setCookie(HIDE_ACCEPT_COOKIES, true);
    Cookies.set(HIDE_ACCEPT_COOKIES, true);

    setHideAcceptCookies(true);
  };

  return hideAcceptCookies ? null : (
    <CookiesNotificationWrapper>
      <StyledCookiesNotification>
        <div>
          Using our site means you consent to our use of cookies. Find out more
          in our{' '}
          <Link sx={{ color: WHITE }} to="/privacy-policy">
            privacy policy
          </Link>
          .
        </div>
        <a
          style={{
            fontSize: '30px',
            padding: '15px',
            marginLeft: '0',
            marginTop: '2px',
            paddingTop: '10px',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          x
        </a>
      </StyledCookiesNotification>
    </CookiesNotificationWrapper>
  );
};

export default React.memo(AcceptCookies);

// import React from "react"
// import styled from "styled-components"

// import {
//   FONT_SIZE_EXTRASMALL,
//   FONT_SIZE_STANDARD,
//   FONT_SIZE_LARGE,
//   SPACING_SMALL,
//   SPACING_STANDARD,
//   LAYOUT_SPACING_LARGE,
//   WHITE,
// } from "../../config/styles"
// import { SCREEN_MD_MAX, SCREEN_LG_MIN } from "../utils"
// import Link from "../navigation/Link"

// const CookiesNotificationInner = styled.div`
//   font-size: ${FONT_SIZE_EXTRASMALL};
//   line-height: ${FONT_SIZE_STANDARD};
//   border: 1px dashed white;
//   display: flex;
//   padding: ${SPACING_SMALL};
//   color: ${WHITE};
//   max-width: ${LAYOUT_SPACING_LARGE};
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   z-index: 99999;
//   background-color: #2b2b2b;

//   button {
//     width: ${FONT_SIZE_LARGE};
//     height: ${FONT_SIZE_LARGE};
//     font-size: ${FONT_SIZE_LARGE};

//     margin: 0;
//     padding: 0;

//     background: none;
//     border: none;
//     color: ${WHITE};

//     cursor: pointer;
//   }
// `

// export const CookiesNotification = props => (
//   <CookiesNotificationInner>
//     <div>
//       Using our site means you consent to our use of cookies. Find out more in
//       our{" "}
//       <Link inheritFontSize to="/privacy-policy">
//         privacy policy
//       </Link>
//       .
//     </div>
//     <button onClick={props.onNotificationDismissed}>⨯</button>
//   </CookiesNotificationInner>
// )

// const CookiesNotificationWrapper = styled.div`
//   @media (max-width: ${SCREEN_MD_MAX}) {
//     display: flex;
//     justify-content: center;
//     margin-top: ${SPACING_SMALL};
//   }
//   @media (min-width: ${SCREEN_LG_MIN}) {
//     float: right;
//     padding: ${SPACING_SMALL} ${SPACING_STANDARD} 0 0;
//   }
// `

// const CookiesNotificationWithWrapper = props => (
//   <CookiesNotificationWrapper>
//     <CookiesNotification {...props} />
//   </CookiesNotificationWrapper>
// )

// export default CookiesNotificationWithWrapper
