import React, {PropTypes} from 'react';
import SeenSelect from '../SeenSelect';

const MovieItem = (props) => {
  return (
    <li
      className="movie-list-item"
    >
      <span className="movie-list-item-title">
        <a href={`/movie/${props.releaseYear}`}>{props.name}</a> ({props.releaseYear})
        {props.seen ? "" : <SeenSelect name={props.name} onClick={props.onClick}/>}
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
