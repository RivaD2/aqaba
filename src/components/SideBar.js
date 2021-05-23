import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {Link} from 'react-router-dom';
import './SideBar.css'

export default class SideBar extends React.Component {
  state = {
    sideMenuOpen: false
  }

  handleStateChange =  state => {
    this.setState({sideMenuOpen: state.isOpen})  
  }

  closeSideMenu = () => {
    this.setState({
      sideMenuOpen: false
    })
  }

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen
    })
  }

  render() {
    return (
      <div>
        <Menu 
          isOpen={this.state.sideMenuOpen} 
          onClose={this.closeSideMenu}
          onStateChange={(state) => this.handleStateChange(state)}
          pageWrapId={'page-wrap'} 
          outerContainerId={'outer-container'}
          >
          <div className="link-block">
            <Link to="/" className="menu-item" onClick={this.closeSideMenu}>
              HOME
            </Link>
            <hr />
            <Link to="/perfumes" className="menu-item" onClick={this.closeSideMenu}>
              PERFUMES
            </Link>
            <hr />
            <Link to="/bath_and_body" className="menu-item" onClick={this.closeSideMenu}>
              BATH/BODY
            </Link>
            <hr />
            <Link to="/gifts" className="menu-item" onClick={this.closeSideMenu}>
              GIFTS
            </Link>
            <hr />
          </div>
        </Menu>
      </div>
    )
  }
}


