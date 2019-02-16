import React from 'react';
import SentAction from './components/SentAction';
import ChangeState from './components/ChangeState';

class AppRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SentAction />
        <ChangeState />
      </div>
    );
  }
}

export default AppRedux;
