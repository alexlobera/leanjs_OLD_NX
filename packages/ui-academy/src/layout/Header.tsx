import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Container, Box, Ul, Li, Grid, H1 } from '@leanjs/ui-core';
import { Link } from '@leanjs/ui-link';

const Z_INDEX_BG = -2;
const SCREEN_SM_MIN = '768px';
const WHITE = '#fff';
export const TECH_REACT = 'react';
export const TECH_GRAPHQL = 'graphql';

interface SectionProps {
  minHeight?: string;
  bgColor?: string;
  bgColors?: string[];
  bgImageUrl?: string;
  bgImageOpacity?: number;
  bgRepeat?: string;
  bgSize?: string;
  bgGradientOpacity?: number;
}

const HeaderSection = styled('header')<SectionProps>`
  position: relative;
  display:block;
  ${({ bgColors, bgColor, bgGradientOpacity = 0.6 }: any) => {
    const bgc =
      bgColors && bgColors.length ? bgColors : bgColor ? [bgColor] : [];
    return bgc.length
      ? `
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
          opacity: ${bgGradientOpacity};`
          : ''
      }
      
    }
    `
      : '';
  }}
  
  ${({
    bgImageUrl,
    bgImageOpacity = 0.5,
    bgRepeat = 'no-repeat',
    bgSize = 'cover',
  }: any) => `
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
          bgImageUrl
            ? `
          background-image: url(${bgImageUrl}); 
          background-repeat: ${bgRepeat}; 
          background-size: ${bgSize};
          background-position: center;
          opacity: ${bgImageOpacity};
          `
            : ''
        }
      }
    }
  `}
  
  @media (min-width: ${SCREEN_SM_MIN}) {
    min-height: ${({ minHeight }) =>
      minHeight ? minHeight : '650px'}; /*100vh*/
  }
`;

export const textBackgroundProps = {
  color: WHITE,
  boxDecorationBreak: 'clone',
  whiteSpace: 'pre-wrap',
  display: 'inline',
};

interface HeaderProps {
  title: string;
  subtitle?: string;
  bgColors?: string[];
  bgImage?: string;
  bgFixedImage?: any;
  bgImageOpacity?: number;
  bgGradientOpacity?: number;
  bgRepeat?: string;
  bgSize?: string;
  links?: {
    text: string;
    to: string;
  }[];
  minHeight?: string;
  textBgColor?: string;
  info?: JSX.Element;
  callToAction?: JSX.Element;
}

export const Header: FunctionComponent<HeaderProps> = ({
  title,
  subtitle,
  bgColors,
  bgImage,
  bgFixedImage,
  bgImageOpacity,
  bgGradientOpacity,
  bgRepeat,
  bgSize,
  minHeight,
  links,
  info,
  callToAction = null,
}) => {
  const [bgImageUrl, setBgImageUrl] = React.useState(
    bgFixedImage?.base64 || bgImage
  );

  if (bgFixedImage) {
    const img = new Image();
    img.onload = () => setBgImageUrl(bgFixedImage.src);
    img.src = bgFixedImage.src;
  }

  return (
    <HeaderSection
      minHeight={minHeight}
      bgColors={bgColors}
      bgImageOpacity={bgImageOpacity}
      bgImageUrl={bgImageUrl}
      bgSize={bgSize}
      bgRepeat={bgRepeat}
      bgGradientOpacity={bgGradientOpacity}
    >
      <Container
        sx={{
          pb: ['100px', '75px'],
          pt: ['160px', '200px'],
        }}
      >
        <Grid columns={12}>
          <Box
            sx={{
              gridColumn: ['1 / -1', '1 / 7'],
              overflow: ['hidden', 'initial'],
              mb: 5,
            }}
          >
            <H1
              sx={{
                ...textBackgroundProps,
                fontWeight: 'bold',
                lineHeight: 1.57,
                px: 3,
                py: 2,
              }}
            >
              {title}
            </H1>
            {subtitle && (
              <>
                <br />
                <Box
                  as="h2"
                  sx={{
                    ...textBackgroundProps,
                    lineHeight: 1.88,
                    px: 3,
                    py: 2,
                  }}
                >
                  {subtitle}
                </Box>
              </>
            )}
            <br />
            {links && links.map && (
              <Box
                as="nav"
                sx={{
                  bg: 'rgba(0, 41, 56, 0.75)',
                  mt: 2,
                  "li,a:not([role='button']):hover,a:not([role='button']):link,a:not([role='button']):visited,a:not([role='button']):active": {
                    color: WHITE,
                  },
                  display: 'inline-block',
                }}
              >
                <Ul variant="inline">
                  <Li>On this page:</Li>
                  {links.map(({ to, text }, i) => (
                    <Li key={i}>
                      <Link
                        className="on-this-page"
                        to={to[0] !== '#' && !to.match('^http') ? `#${to}` : to}
                      >
                        {text}
                      </Link>
                    </Li>
                  ))}
                </Ul>
              </Box>
            )}
            {callToAction && (
              <Box
                sx={{
                  // bg: 'rgba(0, 41, 56, 0.75)',
                  mt: 5,
                  p: 3,
                  display: 'inline-block',
                }}
              >
                {callToAction}
              </Box>
            )}
          </Box>

          {info && (
            <Box
              sx={{
                gridColumn: ['1 / -1', '8 / -1'],
              }}
            >
              {info}
            </Box>
          )}
        </Grid>
      </Container>
    </HeaderSection>
  );
};
