import React from 'react'
import {Link} from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchBar from '../components/SearchBar';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import './Header.css';

class Header extends React.Component {
  state = {showSearchField: false};

  toggleSearchField = () => {
    this.setState({
      showSearchField: !this.state.showSearchField
    })
  }

  render() {
    return (
      <div className="header">
        <div className="nav-container">
          <div className="link-block">
            <Link to="/" className="nav-item" color="inherit">
            Aqaba/
            </Link>
            <Link to="/perfumes" className="nav-item">
              Perfumes/
            </Link>
            <Link to="/gifts" className="nav-item">
              Gifts
            </Link>
          </div>
          <div className="title-block">
            AQABA
          </div>
          <div className="icon-block">
            <div className="cart-icon">
              <IconButton>
              <AddShoppingCartOutlinedIcon />
              </IconButton>
            </div>
            <div className="search-icon">
              <IconButton onClick={this.toggleSearchField}> 
                <SearchOutinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="searchbar-container">
           {this.state.showSearchField && <SearchBar />}
        </div>
      </div>
    )
  }
}

export default Header;
