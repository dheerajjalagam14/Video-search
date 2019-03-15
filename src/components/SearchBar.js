import React from 'react';

class SearchBar extends React.Component {

  state={term:''};

  onFormSubmit= (event) =>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };

  render(){
    return (
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div style={{display:'flex'}}  className="field">
          <label>
            Video Search
          </label>
          <input
            type="text"
            placeholder="What would like to watch from YouTube?"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <div>
            <button style={{margin:"5px"}} type="submit" className="ui primary icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )};
}

export default SearchBar;
