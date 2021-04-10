import React from 'react'
import {Link} from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchBar from '../components/SearchBar';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import GoogleAuth from '../modals/LoginModal';
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

  render() {
    return (
      <div className="header">
        <div className="nav-container">
          <div className="link-block" >
            <Link to="/" className="nav-item" style={{fontWeight: this.state.fontWeight}} onClick={this.onLinkClicked}>
              HOME/
            </Link>
            <Link to="/perfumes" className="nav-item">
              PERFUMES/
            </Link>
            <Link to="/bath_and_body" className="nav-item">
              BATH/BODY/
            </Link>
            <Link to="/gifts" className="nav-item">
             GIFTS
            </Link>
          </div>
          <div className="title-block">
            AQABA
            <div className="creator-title">by Miriam Mirani</div>
          </div>
          <div className="icon-block">
            <div className="cart-icon">
              <IconButton onClick={this.props.showCart}>
                <AddShoppingCartOutlinedIcon />
              </IconButton>
            </div>
            <div className="search-icon">
              <IconButton onClick={this.toggleSearchField}> 
                <SearchOutinedIcon />
              </IconButton>
            </div>
            <div className="account-icon">
              <GoogleAuth/>
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
