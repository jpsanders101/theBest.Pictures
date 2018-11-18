import rimraf from 'rimraf';

console.log('Deleting old assets...');

rimraf('dist/*', err => {
  if (err) {
    throw new Error(err);
  }
});
