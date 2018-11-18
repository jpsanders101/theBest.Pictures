import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('src/index.html', 'utf-8', (error, markup) => {
  if (error) {
    console.log(error);
  }
  const $ = cheerio.load(markup);
  $('head').prepend('<link rel="stylesheet" href="style.css">');
  fs.writeFile('dist/index.html', $('html'), 'utf-8', error => {
    if (error) {
      console.log(error);
    }
  });
});
