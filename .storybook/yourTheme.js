import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI
  appBg: '#2f2f2f',
  appContentBg: '#2f2f2f',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgba(255,255,255,0.9)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'deepskyblue',
  barBg: '#333333',

  // Form colors
  inputBg: 'deepskyblue',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});