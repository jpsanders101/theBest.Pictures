import React, { PropTypes } from "react";
import { connect } from "react-redux";

class LoadingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={this.props.isLoading ? "loading" : ""}
        type="submit"
        value={this.props.value}
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
