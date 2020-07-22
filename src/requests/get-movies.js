import http from 'http';
import { bestPictureWinners } from '../api/bestPictureWinners';

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

export const getMoviesLocal = () =>
  new Promise(resolve => resolve(bestPictureWinners));
