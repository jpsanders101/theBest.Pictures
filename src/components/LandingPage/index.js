import React from 'react';
import { dismissLandingPage } from '../../actions/appActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    dismissLandingPage: () => {
      dispatch(dismissLandingPage())
    }
  }
};
const LandingPage = (props) => {
  const handleLandingButtonClick = e => {
    e.preventDefault();
    props.dismissLandingPage();
  };
  return (<div className="landing-page"><div className="landing-page__message">Do you like movies?</div><button onClick={handleLandingButtonClick}>Yes</button></div >)
}

export default connect(() => ({}), mapDispatchToProps)(LandingPage);

