export type Color =
  | '#4D4D4D'
  | '#696969'
  | '#D8D9DA'
  | '#FAFAFA'
  | '#5B99FF'
  | '#1460AA'
  | '#D4E8FF'
  | '#ECF5FF'
  | '#F6C769'
  | '#F7DCA7'
  | '#7CD97B'
  | '#67BF67'
  | '#1FBCD2'
  | '#0B7382'
  | '#97E0EA'
  | '#e3eff1'
  | '#FFFFFF'
  | '#C20000'
  | '#820B0B';

export interface ColorProps {
  GREY: Color;
  GREY_DARK: Color;
  GREY_MEDIUM: Color;
  GREY_LIGHT: Color;
  BLUE: Color;
  BLUE_DARK: Color;
  BLUE_LIGHT1: Color;
  BLUE_LIGHT2: Color;
  ORANGE: Color;
  ORANGE_LIGHT: Color;
  GREEN: Color;
  GREEN_DARK: Color;
  TEAL: Color;
  TEAL_DARK: Color;
  TEAL_MEDIUM: Color;
  TEAL_LIGHT: Color;
  WHITE: Color;
  RED: Color;
  RED_DARK: Color;
}

export const color: ColorProps = {
  GREY: '#4D4D4D',
  GREY_DARK: '#696969',
  GREY_MEDIUM: '#D8D9DA',
  GREY_LIGHT: '#FAFAFA',

  BLUE: '#5B99FF',
  BLUE_DARK: '#1460AA',
  BLUE_LIGHT1: '#D4E8FF',
  BLUE_LIGHT2: '#ECF5FF',

  ORANGE: '#F6C769',
  ORANGE_LIGHT: '#F7DCA7',

  GREEN: '#7CD97B',
  GREEN_DARK: '#67BF67',

  TEAL: '#1FBCD2',
  TEAL_DARK: '#0B7382',
  TEAL_MEDIUM: '#97E0EA',
  TEAL_LIGHT: '#e3eff1',

  WHITE: '#FFFFFF',

  // ERROR MESSAGES
  RED: '#C20000',
  RED_DARK: '#820B0B',
};

export default color;
