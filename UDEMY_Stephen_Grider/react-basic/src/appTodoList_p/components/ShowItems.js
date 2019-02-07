import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, deleteAllItem } from '../actions';

class ShowItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderListOfItem() {
    return this.props.list.map(i => {
      return (
        <li className="todo_item clearfix" key={i.item}>
          {i.item}
          <button
            className="delete_btn"
            onClick={() => this.props.deleteItem(i.item)}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="show_items">
        <div className="clearfix">
          <p className="err_msg_text" />
          <button
            className="delete_all_btn"
            onClick={() => this.props.deleteAllItem()}
          >
            Delete All
          </button>
        </div>

        <ul>{this.renderListOfItem()}</ul>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    list: state.handleItem,
  };
};

export default connect(
  mapPropsToState,
  { deleteItem, deleteAllItem }
)(ShowItems);
