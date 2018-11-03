import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class LoadingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading, value } = this.props;
    return (
      <input
        className={classnames('review-form__button', {
          'review-form__button--loading': isLoading
        })}
        type="submit"
        value={value}
      />
    );
  }
}

LoadingButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.ajaxCalls > 0
  };
};

export default connect(mapStateToProps)(LoadingButton);
