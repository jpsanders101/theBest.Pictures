import React from 'react';
import PropTypes from 'prop-types';
import SeenMarker from '../SeenMarker';
import { Link } from 'react-router-dom';

const MovieItem = ({ releaseYear, name, onClick, seen }) => {
  return (
    <li className="movie-list__movie-item-container">
      <div className="movie-list__movie-item">
        <span className="movie-list__title">
          <Link to={`/movie/${releaseYear}`}>{name}</Link>
        </span>
        <SeenMarker name={name} onClick={onClick} seen={seen} />
      </div>
    </li>
  );
};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  seen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieItem;
