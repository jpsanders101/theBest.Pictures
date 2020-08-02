import React from 'react';
import Header from '../Header';
import LandingPage from '../LandingPage';
import { connect } from 'react-redux';
import LoginModal from '../LoginModal';
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
        <main className="base-page">
          {this.props.showLoginModal && <LoginModal />}
          <div className="page-content">{this.props.children}</div>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showLandingPage: state.app.showLandingPage,
  showLoginModal: state.app.showLoginModal
});

export default connect(mapStateToProps)(BasePage);
