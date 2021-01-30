import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";

export default class SearchBar extends React.Component {
  state = { term: ''};

  onInputChange = e => {
    this.setState({ term: e.target.value })
    console.log(e.target.value)
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
    console.log('in on Form Submit', this.state.term);
  }
  render() {
    return (
      <div> 
        <TextField
            label="Search Aqaba"
            className="search-field"
            onChange={this.onInputChange}
            value={this.state.term}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                      <SearchOutinedIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
        />
      </div>
    )
  }
}

