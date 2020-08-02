import React from 'react';
import PropTypes from 'prop-types';
import SeenMarker from '../SeenMarker';
import { Link } from 'react-router-dom';

const MovieItem = ({ name, onClick, seen, awardNumber }) => {
  return (
    <li className="movie-list__movie-item-container">
      <span className="movie-list__title">
        <Link to={`/movie/${awardNumber}`}>{name}</Link>
      </span>
      <SeenMarker name={name} onClick={onClick} seen={seen} />
    </li>
  );
};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  seen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  awardNumber: PropTypes.number.isRequired
};

export default MovieItem;
