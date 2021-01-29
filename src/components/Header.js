import React from 'react'
import {Link} from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";

const Header = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/" className="nav-item" color="inherit">
         Aqaba/
        </Link>
        <Link to="/perfumes" className="nav-item">
          Perfumes/
        </Link>
        <Link to="/gifts" className="nav-item">
          Gifts
        </Link>
      <TextField
          label="Search Aqaba"
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
   </>
  )
}

export default Header;
