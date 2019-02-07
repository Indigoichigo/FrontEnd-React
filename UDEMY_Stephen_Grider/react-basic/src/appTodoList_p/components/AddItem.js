import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      msg: '',
    };
  }

  handleInputText = e => {
    this.setState({ text: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // if text already set in todo list
    const isRepeat = this.props.currentList.find(i => {
      return i.item === this.state.text;
    });
    if (isRepeat) {
      this.setState({ msg: this.props.errMsg[0] });
      return;
    } else if (this.state.text === '') {
      this.setState({ msg: this.props.errMsg[1] });
      return;
    } else {
      this.setState({ msg: this.props.errMsg[2] });
    }
    this.props.addItem(this.state.text);
  };

  render() {
    return (
      <div className="add_item">
        <form onSubmit={this.handleSubmit}>
          <input
            className="add_item_input"
            placeholder="Add Item"
            onChange={this.handleInputText}
            value={this.state.text}
          />
        </form>
        <div className="err_msg_text">{this.state.msg}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentList: state.handleItem,
    errMsg: state.errMsg,
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(AddItem);
