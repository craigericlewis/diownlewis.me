import { Size } from '../types/size';

export const theme = {
  color: {
    blue: '#003FFF',
    darkGrey: '#727272',
    lightGrey: '#F1F1F1',
    offBlack: '#1A1919',
    background: '#F1F1F1',
  },
  fontSize: {
    [Size.XSMALL]: 14,
    [Size.SMALL]: 16,
    [Size.MEDIUM]: 18,
    [Size.LARGE]: 24,
    [Size.XLARGE]: 36,
  },
  lineHeight: {
    [Size.XSMALL]: 1.1,
    [Size.SMALL]: 1.1,
    [Size.MEDIUM]: 1.2,
    [Size.LARGE]: 1.3,
    [Size.XLARGE]: 1.3,
  },
  fontFamily: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
    name: 'Lexend Exa, sans-serif'
  },
};
