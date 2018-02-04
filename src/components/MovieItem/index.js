import React, {PropTypes} from 'react';

const MovieItem = (props) => {
  return (
    <li key={props.key}>{props.name} ({props.releaseYear})
    {props.seen ? "" : <SeenSelect name={props.name} onClick={props.onClick}/>}
    </li>
  );
};

const SeenSelect = (props) => {

  const onClick = e => {
    props.onClick(props.name);
  };

  return (
    <span onClick={onClick}>- Seen?</span>
  );
}



MovieItem.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  seen: PropTypes.bool.isRequired
};

export default MovieItem;
