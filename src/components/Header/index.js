import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthenticated } from '../../reducers/userReducer';
import { toggleLoginModal } from '../../actions/appActions';

function Header({ authenticated, toggleLoginModal }) {
  const handleLoginModalClick = e => {
    e.preventDefault();
    toggleLoginModal();
  };
  return (
    <nav className="header">
      <Link to="/" className="header__link header_home-link">
        TheBest.Pictures
      </Link>
      <div className="header_link-container">
        <Link to="/about" className="header__link header_about-link">
          About
        </Link>
        {!authenticated && (
          <a
            href=""
            onClick={handleLoginModalClick}
            className="header__link header_login-link"
          >
            Login or register
          </a>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  authenticated: getAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  toggleLoginModal: () => dispatch(toggleLoginModal())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
