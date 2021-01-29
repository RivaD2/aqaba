import React from 'react'
import {Link} from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";

const Header = () => {
  return (
    <>
    <div className = "nav-container">
      <div className="nav-items">
        <Link href="/" className="nav-item" color="primary">
         Aqaba/
        </Link>
        <Link href="/perfumes" className="nav-item">
          Perfumes/
        </Link>
        <Link href="/gifts" className="nav-item">
          Gifts
        </Link>
      </div>
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
    <div className="header-text">
     AQABA
   </div>
   </>
  )
}
export default Header;
