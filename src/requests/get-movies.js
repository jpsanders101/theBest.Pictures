import http from 'http';

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:8080/get-movies', res => {
      let moviesData = '';
      res
        .on('data', chunk => {
          moviesData += chunk;
        })
        .on('end', () => {
          try {
            const parsedData = JSON.parse(moviesData);
            resolve(parsedData);
          } catch (e) {
            reject(e);
          }
        })
        .on('error', e => {
          reject(e);
        });
    });
  });
};
