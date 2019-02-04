import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class AppPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.handleSearchText = this.handleSearchText.bind(this);
  }

  async handleSearchText(term) {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar funchandleSerachText={this.handleSearchText} />
        Found: {this.state.images.length} length;
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default AppPics;
