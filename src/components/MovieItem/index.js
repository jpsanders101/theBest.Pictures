import React from 'react';
import PropTypes from 'prop-types';
import SeenMarker from '../SeenMarker';
import { Link } from 'react-router-dom';

const MovieItem = props => {
  return (
    <li className="movie-list__movie-item">
      <span className="movie-list__title">
        <Link to={`/movie/${props.releaseYear}`}>{props.name}</Link>
      </span>
      <SeenMarker name={props.name} onClick={props.onClick} seen={props.seen} />
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
