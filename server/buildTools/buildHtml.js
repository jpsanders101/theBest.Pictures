const fs = require('fs');
const cheerio = require('cheerio');

fs.readFile('src/index.html', 'utf-8', (error, markup) => {
  if (error) {
    console.log(error);
  }
  const $ = cheerio.load(markup);
  $('head').prepend('<link rel="stylesheet" href="style.css">');
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  fs.writeFile('dist/index.html', $('html'), 'utf-8', error => {
    if (error) {
      console.log(error);
    }
  });
});
