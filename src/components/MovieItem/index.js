import React, {PropTypes} from 'react';

const MovieItem = (props) => {
  return <li key={props.key}>{props.name} ({props.releaseYear})</li>;
}

MovieItem.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired
};

export default MovieItem;
