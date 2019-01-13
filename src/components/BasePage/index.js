import React from 'react';
import Header from '../Header';

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<React.Fragment><Header /><main>{this.props.children}</main></React.Fragment>)
  }
}