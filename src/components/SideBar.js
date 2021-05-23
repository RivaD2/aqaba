import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {Link} from 'react-router-dom';
import './SideBar.css'

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <Menu onClose={this.props.closeSideMenu}>
          <div className="link-block" >
            <Link to="/" className="menu-item" >
              HOME
            </Link>
            <hr />
            <Link to="/perfumes" className="menu-item">
              PERFUMES
            </Link>
            <hr />
            <Link to="/bath_and_body" className="menu-item">
              BATH/BODY
            </Link>
            <hr />
            <Link to="/gifts" className="menu-item">
              GIFTS
            </Link>
            <hr />
          </div>
        </Menu>
      </div>
    )
  }
}


