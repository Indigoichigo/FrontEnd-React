import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

class AppSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default AppSong;
