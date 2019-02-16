import React from 'react';
import { plusNumber, minusNumber } from '../actions';
import { connect } from 'react-redux';

class SentAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handlePlusNum() {}

  render() {
    return (
      <div>
        <button onClick={this.props.plusNumber}>+</button>
        <button onClick={this.props.minusNumber}>-</button>
      </div>
    );
  }
}

export default connect(
  null,
  { plusNumber, minusNumber }
)(SentAction);
