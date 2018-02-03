import React, {PropTypes} from 'react';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>High-level app template.</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
