import MovieList from '../MovieList';
import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import BasePage from '../BasePage';
import SeenFilterPanel from '../SeenFilterPanel';
import { NUMBER_OF_MOVIES } from '../../actions/constants';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateProgress() {
    const { reviews } = this.props;
    return Math.floor((reviews.length / NUMBER_OF_MOVIES) * 100);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <BasePage>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="homepage">
            <div className="homepage__heading-section">
              <div className="homepage__title-section">
                <h1 className="homepage__heading">
                  There are {NUMBER_OF_MOVIES} movies which have won the Oscar
                  for Best Picture.
                </h1>
                <h2>How many have you seen?</h2>
                <ProgressBar progress={this.calculateProgress()} />
              </div>
              <div className="homepage__widget-section">
                <SeenFilterPanel />
              </div>
            </div>
            <MovieList />
          </div>
        )}
      </BasePage>
    );
  }
}

Homepage.propTypes = {
  reviews: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.ajaxCalls > 0,
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(Homepage);
