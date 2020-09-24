import { Color, color } from '../../Config/colors';
import { BoxShadowProps } from '../../Config/old-theme';

interface Variant {
  color?: Color;
  backgroundColor?: Color;
  fontSize?: string;
  lineHeight?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  boxShadow$?: keyof BoxShadowProps;
  opacity?: string;
}

export interface ButtonVariantProps {
  primary: Variant;
  secondary: Variant;
  tertiary: Variant;
  inactive: Variant;
}

const buttonVariantProps: ButtonVariantProps = {
  primary: {
    color: color.WHITE,
    backgroundColor: color.GREEN_DARK,
    fontSize: '2',
    lineHeight: '2',
    fontStyle: 'normal',
    fontWeight: 'bold',
    boxShadow$: 'light',
  },
  secondary: {
    color: color.WHITE,
    backgroundColor: color.TEAL_DARK,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 'light',
    boxShadow$: 'light',
  },
  tertiary: {
    color: color.GREY_DARK,
    backgroundColor: color.WHITE,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 'normal',
    boxShadow$: 'light',
  },
  inactive: {
    color: color.WHITE,
    backgroundColor: color.GREY,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 'bold',
    boxShadow$: 'none',
  },
};

export default buttonVariantProps;
