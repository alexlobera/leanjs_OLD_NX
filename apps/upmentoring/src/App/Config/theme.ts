// import { style } from "styled-system";
import colors, { ColorProps } from './colors';
// TODO? replace all the styled-system helper functions with $ equivalent?
// export const fontFamily = style({
//   cssProperty: "font-family",
//   prop: "fontFamily$"
// });

export const boxShadow = ({
  boxShadowColor$,
  boxShadow$,
  theme: t,
}: any): any =>
  t && t.boxShadows
    ? `box-shadow: ${t.boxShadows[boxShadow$]} ${boxShadowColor$};`
    : '';

export const fontFamily = ({ fontFamily$, theme: t }: any): any =>
  t && t.fonts ? `font-family: ${t.fonts[fontFamily$]};` : '';

interface FontWeightProps {
  normal: string;
  bold: string;
  light: string;
}

export interface BoxShadowProps {
  normal: string;
  bold: string;
  light: string;
  none: string;
}

interface BorderColorProps {
  GREEN: string;
  GREY: string;
  GREY_MEDIUM: string;
}

interface FontsProps {
  serif: string;
}

interface FontStylesProps {
  normal: string;
  italic: string;
}

interface MaxWidthProps {
  normal: string;
  small: string;
  xsmall: string;
  full: string;
}

export interface ThemeInterface {
  space: string[];
  boxShadows: BoxShadowProps;
  colors: ColorProps;
  borderColor: BorderColorProps;
  fonts: FontsProps;
  fontSizes: string[];
  fontStyle: FontStylesProps;
  lineHeights: string[];
  fontWeights: FontWeightProps;
  radii: number[];
  maxWidths: MaxWidthProps;
}

const theme: ThemeInterface = {
  space: [
    '0rem',
    '0.625rem',
    '0.9rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
  ],
  colors,
  borderColor: {
    GREEN: '#7CD97B',
    GREY: '#4D4D4D',
    GREY_MEDIUM: '#D8D9DA',
  },
  fonts: {
    serif: 'Roboto Slab, Bodoni MT, Didot, Times New Roman, serif',
  },
  fontSizes: [
    '0.8rem',
    '0.9rem',
    '1rem',
    '1.25rem',
    '1.563rem',
    '1.953rem',
    '2.441rem',
  ],
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  lineHeights: ['0', '1.5rem', '1.87rem', '2rem'],
  fontWeights: {
    normal: '300',
    bold: '500',
    light: '100',
  },
  boxShadows: {
    light: '0px 0px 10px',
    normal: '0px 0px 20px',
    bold: '0px 0px 40px',
    none: 'none',
  },
  maxWidths: {
    normal: '65ch',
    small: '25ch',
    xsmall: '10ch',
    full: '100%',
  },
  radii: [10, 22, 44],
};

export default theme;
