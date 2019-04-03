import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import Streamform from './StreamForm';

class StreamCreate extends React.Component {
  // preventDefault has done by redux-form
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <Streamform onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream },
)(StreamCreate);
