import colors from 'colors';

/* eslint-disable no-console */

const nodeEnv = process.env.NODE_ENV;

const modeConsoleOutput = () => {
  if (nodeEnv === 'production') {
    return 'PRODUCTION'.magenta;
  }
  if (nodeEnv === 'development') {
    return 'DEV'.cyan;
  }
};

console.log(
  'Starting'.green,
  'TheBest.Pictures'.green.bold,
  'in'.green,
  modeConsoleOutput(),
  'mode...'.green
);
