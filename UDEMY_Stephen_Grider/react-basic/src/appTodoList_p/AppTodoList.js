import React from 'react';
import ShowItems from './components/ShowItems';
import AddItem from './components/AddItem';
import './styles/style.css';

class AppTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app_todolist">
        <AddItem />
        <ShowItems />
      </div>
    );
  }
}

export default AppTodoList;
