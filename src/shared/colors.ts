export const Colors = {
  primary: '#F8AC25',
  primaryRGB: 'rgba(0, 102, 49, 0.2)',
  secondary: '#A0C938',
  secondaryRGB: 'rgba(160, 201, 56, 0.2)',

  blackRGB: 'rgba(0, 0, 0, 0.25)',
  black: '#000000',
  gray1: '#333333',
  gray2: '#4f4f4f',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray5: '#F1F2F8',
  gray6: '#F2F2F2',
  whiteSmooth: '#f7f7f7',
  white: '#FFFFFF',
  whitegray:'#f9f9f9',

  red: '#EB5757',
  redRGB: 'rgba(235, 87, 87, 0.2)',
  red2: '#FF0000',

  orange: '#F2994A',
  orange3: '#ffebcd',

  yellow: '#F2C94C',
  yellow2: '#FFA500',
  yellowRGB: 'rgba(242, 201, 76, 0.2)',
  yellow2RGB: 'rgba(255, 165, 0, 0.2)',

  blue: '#2F80ED',
  green1: '#219653',
  green2: '#00783C',
  green3: '#25D366',
  green4: '#F4F9E7',
  green5: '#F0FBF2',
  green6: '#419118',

  planoBlack: '#FFD57E',
  verdeAgua: '#EDFFF4',

  blue1: '#2F80ED',
} as const;

export const Gradients = {
  diagonalBlackWhite:
    'linear-gradient(153.84deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
  diagonalWhiteWhite:
    'linear-gradient(153.84deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
  diagonalGreenGreen:
    'linear-gradient(315deg, rgba(0, 120, 60, 1) 0%, rgba(86, 155, 53, 1) 100%)',
} as const;
