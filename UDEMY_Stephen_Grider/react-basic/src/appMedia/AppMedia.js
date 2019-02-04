import React from 'react';
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import './css/app-media.css';

class AppMedia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.handleSearchText('apple');
  }

  handleSearchText = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="app-media">
        <SearchBar handleSearchText={this.handleSearchText} />
        <section className="detail-list-wrapper">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            handleVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </section>
      </div>
    );
  }
}

export default AppMedia;
