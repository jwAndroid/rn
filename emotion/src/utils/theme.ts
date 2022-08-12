import { Theme } from '@emotion/react';

export const font = {
  YoonGothicBold: require('../assets/font/YoonGothicBold.otf'),
};

export const icon = {
  favoritesfill: require('../assets/icons/favoritesfill.png'),
};

export const AppTheme: Theme = {
  font: {
    YoonGothicBold: 'YoonGothicBold',
    YoonGothicBoldIos: 'YDIYGO330',
  },
  color: {
    white: '#fff',
    black: '#000',
    skyblue: {
      one: '#95BBEC',
      two: '#8CB6E8',
      three: '#86AFE3',
    },
  },
  icon,
};

export type IAppTheme = typeof AppTheme;
