import React from 'react';
import { connect } from 'react-redux';

class ChangeState extends React.Component {
  render() {
    console.log(this.props.showNum.num);
    return <div>Num: {this.props.showNum.num}</div>;
  }
}

const mapStateToProps = state => {
  return {
    showNum: state.handleNumber,
  };
};

export default connect(mapStateToProps)(ChangeState);
