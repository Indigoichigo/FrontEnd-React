import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.funchandleSerachText(this.state.searchText);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
