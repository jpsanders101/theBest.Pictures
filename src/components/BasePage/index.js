import React from 'react';
import Header from '../Header';
import LandingPage from '../LandingPage';
import { connect } from 'react-redux';

class BasePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.showLandingPage ? (
      <LandingPage />
    ) : (
      <React.Fragment>
        <Header />
        <main className="base-page">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showLandingPage: state.app.showLandingPage
});

export default connect(mapStateToProps)(BasePage);
