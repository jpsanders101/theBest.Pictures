const fs = require('fs');

const getMovies = async () => {
  const res = fs.opendirSync('./src/content/movies');
  for await (const dirent of res) {
    console.log(dirent.name);
  }
};

getMovies();
