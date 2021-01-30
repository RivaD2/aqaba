import React from 'react'
import {Link} from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

class Header extends React.Component {

  render() {
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
          <AddShoppingCartOutlinedIcon />
        </div>
     </>
    )
  }
}

export default Header;
