import React from 'react'
import {Link} from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchBar from '../components/SearchBar';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import './Header.css';

class Header extends React.Component {
  state = {showSearchField: false};

  toggleSearchField = () => {
    this.setState({
      showSearchField: !this.state.showSearchField
    })
  }
  
  onLoginClicked = () => {
    this.setState({
      showAccountModal: !this.state.showAccountModal
    })
  }

  onCartClicked = () => {
    this.setState({
      showCartModal: !this.state.showCartModal
    })
  }

  render() {
    return (
      <div className="header">
        <div className="nav-container">
          <div className="link-block">
            <Link to="/" className="nav-item" color="inherit">
            AQABA/
            </Link>
            <Link to="/perfumes" className="nav-item">
              PERFUMES/
            </Link>
            <Link to="/gifts" className="nav-item">
              GIFTS
            </Link>
          </div>
          <div className="title-block">
            AQABA
            <div className="creator-title">by Miriam Mirini</div>
          </div>
          <div className="icon-block">
            <div className="cart-icon">
              <IconButton>
                <AddShoppingCartOutlinedIcon onClick={this.showCartModal}/>
              </IconButton>
            </div>
            <div className="search-icon">
              <IconButton onClick={this.toggleSearchField}> 
                <SearchOutinedIcon />
              </IconButton>
            </div>
            <div className="account-icon">
              <IconButton >
                <PermIdentityOutlinedIcon onClick={this.showAccountModal}/>
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
