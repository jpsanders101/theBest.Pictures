import React, {PropTypes} from 'react';
import MovieItem from '../MovieItem';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  render() {
    return (
    <div>
      <h1>Seen:</h1>
    <ul>
    {this.state.bestPictureWinners.filter(movie => movie.seen).map((movie, index) => {
    return <MovieItem key={index} name={movie.name} releaseYear={movie.releaseYear} onClick={this.onClickHandler}/>;
    })}
    </ul>
    <h1>Yet to See:</h1>
    <ul>
      {this.state.bestPictureWinners.filter(movie => !movie.seen).map((movie, index) => {
        return <MovieItem key={index} name={movie.name} releaseYear={movie.releaseYear} onClick={this.onClickHandler}/>;
      })}
    </ul>
    </div>);
  }

  onClickHandler(movieName) {
    const state = this.state;
    let index = state.bestPictureWinners.findIndex(movie => {
      return movie.name === movieName;
    });
    state.bestPictureWinners[index].seen = true;
    this.setState(state);
  }
}

MovieList.propTypes = {
  bestPictureWinners: PropTypes.array.isRequired
}

export default MovieList;
