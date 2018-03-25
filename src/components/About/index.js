import React from 'react';
import {Link} from 'react-router';

class About extends React.Component {
  render () {
    return (
      <div>
        <h1>ABOUT</h1>
        A little app used for ticking-off Oscar best-picture winners as I watch them.
        <Link to="/">HOME</Link>
      </div>
    );
  }
}

export default About;
