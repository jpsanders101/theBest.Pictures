import React, { PropTypes } from 'react';
import SeenSelect from '../SeenSelect';
import { Link } from 'react-router';

const MovieItem = props => {
  return (
    <li className="movie-list-item">
      <span className="movie-list-item-title">
        <Link to={`/movie/${props.releaseYear}`}>{props.name}</Link>
        {props.seen ? (
          ''
        ) : (
          <SeenSelect name={props.name} onClick={props.onClick} />
        )}
      </span>
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
