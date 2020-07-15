import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Box, BoxProps, LeanProps, As, LeanComponent } from '.';
import { Heading } from '../display';

const Z_INDEX_BG = -2;
const SCREEN_SM_MIN = '768px';
const SCREEN_XS_MAX = '767px';
const WHITE = '#fff';
const BLUE_04 = `rgba(97, 218, 251, 0.4)`;
const SCREEN_SM_MAX = '991px';
export const TECH_REACT = 'react';
export const TECH_GRAPHQL = 'graphql';

interface BackgroundProps extends BoxProps {
  height?: string;
  bgColor?: string;
  bgColors?: string[];
  bgImage?: string;
  bgImageOpacity?: string;
}

const Background = styled<FunctionComponent<BackgroundProps>>(Box)`
  position: relative;
  display:block;
  ${({ bgColors, bgColor }: any) => {
    const bgc =
      bgColors && bgColors.length ? bgColors : bgColor ? [bgColor] : [];

    return (
      bgc.length &&
      `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: ${Z_INDEX_BG};
      ${
        bgc.length > 1
          ? `background-image: linear-gradient(to bottom right,${bgc.join()});`
          : bgc.length === 1
          ? `
          background-color: ${bgc[0]};
          opacity: 0.6;`
          : ''
      }
      
    }
    `
    );
  }}
  
  ${({ bgImage, bgImageOpacity = '0.5' }: any) => `
    @media (min-width: ${SCREEN_SM_MIN}) {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Z_INDEX_BG};
        ${
          bgImage
            ? `
          background-image: url(${bgImage}); 
          background-repeat: no-repeat; 
          background-size: cover;
          background-position: center;
          opacity: ${bgImageOpacity};
          `
            : ''
        }
      }
    }
  `}
  
  @media (min-width: ${SCREEN_SM_MIN}) {
    min-height: ${({ height }) => (height ? height : '100vh')};
    padding-bottom: ${({ paddingBottom = '200' }: any) =>
      paddingBottom}px !important;
    padding-top: 200px !important;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 160px;
  }
`;

interface TechLogoProps extends BoxProps {
  tech?: string;
}

const TechLogo = styled<FunctionComponent<TechLogoProps>>(Box)`
  ${({ tech }: any) =>
    tech &&
    `
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${Z_INDEX_BG};
    background-image: ${
      tech === TECH_REACT
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-10 20 700 700'%3E%3Cg fill='%2361DAFB'%3E%3Cpath d='M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z'/%3E%3Ccircle cx='420.9' cy='296.5' r='45.7'/%3E%3Cpath d='M520.5 78.1z'/%3E%3C/g%3E%3C/svg%3E")`
        : tech === TECH_GRAPHQL
        ? `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='-150 -23 530 530' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23E535AB' d='M57.468 302.656l-14.376-8.3 160.15-277.38 14.376 8.3z'/%3E%3Cpath fill='%23E535AB' d='M39.8 272.2h320.3v16.6H39.8z'/%3E%3Cpath fill='%23E535AB' d='M206.348 374.025l-160.21-92.5 8.3-14.376 160.21 92.5zM345.521 132.947l-160.21-92.5 8.3-14.375 160.21 92.5z'/%3E%3Cpath fill='%23E535AB' d='M54.482 132.881l-8.3-14.375 160.21-92.5 8.3 14.375z'/%3E%3Cpath fill='%23E535AB' d='M342.566 302.666l-160.15-277.38 14.375-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z'/%3E%3Cpath fill='%23E535AB' d='M330.9 107.5h16.6v185h-16.6z'/%3E%3Cpath fill='%23E535AB' d='M203.527 367.002l-7.25-12.557 139.339-80.45 7.25 12.557z'/%3E%3Cpath d='M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8s-22.4-31-12.8-47.7 31-22.4 47.7-12.8c16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8s-22.4-31-12.8-47.7 31-22.4 47.7-12.8c16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9S180.7 326 200 326s34.9 15.6 34.9 34.9c0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9S180.7 4.2 200 4.2s34.9 15.6 34.9 34.9S219.3 74 200 74' fill='%23E535AB'/%3E%3C/svg%3E")`
        : ''
    };
    opacity:0.6;
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100%;
    height: 150%;
    @media (min-width: ${SCREEN_SM_MIN}) {
      background-position-x: 200px;
      background-position-y: -100px;
    }
  }
`}
`;

TechLogo.displayName = 'TechLogo';

//const Title = <T extends As = 'h2'>(props: LeanProps<T>) => (
const Title: LeanComponent = (props) => (
  <Heading
    {...props}
    __themeKey="styles"
    sx={{
      bg: WHITE,
      color: 'rgb(38, 114, 128)',
      display: 'table',
      ...(props.sx || {}),
    }}
  />
);

const Header: FunctionComponent = ({ children }) => (
  <Background height="100vh" bgColors={['#267280', 'rgba(256,256,256, 0.9)']}>
    <TechLogo tech={TECH_REACT}>
      <Container>
        <Box sx={{ width: ['100%', '50%'] }}>
          <Title as="h1" sx={{ px: 2, py: 3 }}>
            Online React & GraphQL Courses
          </Title>
          <Title variant="h2" sx={{ pt: 2, px: 2, py: 3, lineHeight: 1.5 }}>
            Learn React and GraphQL online at your own pace with the React
            GraphQL Academy teaching method
          </Title>
        </Box>
      </Container>
    </TechLogo>
  </Background>
);

export default Header;
