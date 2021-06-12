import React from 'react'
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends React.Component {
  state = { term: ''};
  
  onInputChange = e => {
    this.setState({ term: e.target.value })
    this.props.onSearchChanged(e.target.value)
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }
  
  render() {
    return (
      <div className="searchbar"> 
        <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className="search-field"
            onChange={this.onInputChange}
            value={this.state.term}
        />
      </div>
    )
  }
}

