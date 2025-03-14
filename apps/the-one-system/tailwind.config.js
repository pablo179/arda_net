const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{jsx,ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'fangorn': '#0F6310',
      'entwood': '#328734',
      'moss': '#726F12',
      'anduin': '#0F4663',
      'hithoel': '#0F635E',
      'belfalas': '#18678E',
      'ivy': '#25D02D',
      'balrog': '#D02525',
      'mallorn': '#D0B425',
      'vingilot': '#2594D0',
      'lorien': '#112612',
      'galadriel': '#F2FFF3',
      'gandalf': '#7A817A',
      'melian': '#354234'
    },
    fontFamily: {
      'quick': ['Quicksand', 'serif'],
      'jac': ['Jacques Francois', 'serif'],
    },
  },
  plugins: [],
};
