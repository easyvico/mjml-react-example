import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

// coral / ocean highlights
const theme = create({ base: 'dark', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD', brandImage: '' });
addParameters({ options: { theme } });

function loadStories() {
  const req = require.context('../stories', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

// Customize theme
// import { configure, addParameters } from '@storybook/react';
// import yourTheme from './yourTheme';
// import { create } from '@storybook/theming';

// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// addParameters({
//   options: {
//     theme: yourTheme,
//   },
// });

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
// configure(loadStories, module);
