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
    if(this.state.searchTerm) {
      console.log('searching for something', this.state.searchTerm);
      return;
    }
    this.setState({
      showSearchField: !this.state.showSearchField
    })
  }
  
  // onLoginClicked = () => {
  //   this.setState({
  //     showLoginModal: !this.state.showLoginModal
  //   })
  // }
  
  onSearchChanged = searchTerm => {
    this.setState({
     searchTerm
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
            {this.state.showSearchField && <SearchBar onSearchChanged={this.onSearchChanged}/>}
            <div className="search-icon">
                <IconButton onClick={this.toggleSearchField}> 
                  <SearchOutinedIcon />
                </IconButton>
              </div>
              <div className="cart-icon">
                <IconButton onClick={this.props.showCart}>
                  <AddShoppingCartOutlinedIcon />
                </IconButton>
              </div>
              <div className="account-icon">
                <div className="login-icon-container">
                  {/* This was originally in Login component */}
                  <IconButton onClick={this.props.showAccountModal}>
                    <PermIdentityOutlinedIcon/>
                  </IconButton>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
