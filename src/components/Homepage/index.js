import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const bestPictureWinners = [{name: 'Wings', releaseYear: '1927'},
                            {name: 'The Broadway Melody', releaseYear: 1928},
                            {name: 'All Quiet On the Western Front', releaseYear: 1930},
                            {name: 'Cimarron', releaseYear: 1931},
                            {name: 'Grand Hotel', releaseYear: 1932},
                            {name: 'Cavalcade', releaseYear: 1933}]

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>A place to tick off Oscar best picture winners as I watch them.</h1>
        This represents the homepage and will be where the full list of movies will go.
      <ul>
        {bestPictureWinners.map((movie, index) => {
          return <li key={index}>Name: {movie.name}, Year of Release:{movie.releaseYear}</li>;
        })}
      </ul>
      <Link to='/about'>ABOUT</Link>
      </div>
    );
  }
}

export default Homepage;
