import React from 'react';
import { dismissLandingPage } from '../../actions/appActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => {
  return {
    dismissLandingPage: () => {
      dispatch(dismissLandingPage());
    }
  };
};
const LandingPage = props => {
  const handleLandingButtonClick = e => {
    e.preventDefault();
    document.cookie = 'seen_landing=true';
    props.dismissLandingPage();
  };
  return (
    <div className="landing-page">
      <div className="landing-page__message">
        <h1 className="landing-page__question">
          Do you like going to the pictures?
        </h1>
      </div>
      <button
        className="landing-page__button"
        onClick={handleLandingButtonClick}
      >
        Yes
      </button>
    </div>
  );
};

LandingPage.propTypes = {
  dismissLandingPage: PropTypes.func.isRequired
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(LandingPage);
